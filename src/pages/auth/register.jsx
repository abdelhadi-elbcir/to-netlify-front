import React, { useState } from 'react';
import { GoogleLogin } from '@react-oauth/google'; 
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaLock } from 'react-icons/fa';
import Popup from '../../components/popup/PopupRegister';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false,
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleGoogleSuccess = async (response) => {
    try {
      const googleIdToken = response.credential;
      console.log("Google token received: ", googleIdToken);

      const backendResponse = await fetch('http://localhost:8081/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken: googleIdToken }),
      });

      const data = await backendResponse.json();

      if (backendResponse.ok) {
        const { jwt } = data.jwt;
        localStorage.setItem('token', jwt);
        setMessage('Registered successfully with Google!');
      } else {
        setError(data.message || 'Google registration failed.');
      }
      setShowPopup(true);
    } catch (error) {
      setError('An error occurred with Google.');
      setShowPopup(true);
    }
  };

  const handleGoogleFailure = () => {
    setError('Google sign-up failed.');
    setShowPopup(true);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      setShowPopup(true);
      return;
    }

    setError('');
    setMessage('');

    const dataToSend = {
      username: formData.username,
      email: formData.email,
      password: formData.password,
      role: "USER",
    };

    try {
      const response = await fetch('http://localhost:8081/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      });

      const responseText = await response.text();

      if (response.ok) {
        setMessage(responseText || 'Registration successful!');
        navigate('/login');
      } else {
        setError(responseText || 'An error occurred.');
      }
      setShowPopup(true);
    } catch (error) {
      setError('Error connecting to the server.');
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white mb-[40px] pt-[64px]">
      <div className="w-full max-w-md bg-[#f8f9fa] p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Create an Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <div className="flex items-center mb-1">
              <FaUser className="mr-2 text-primary" />
              <label className="text-primary">Username</label>
            </div>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-primary"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-1">
              <FaEnvelope className="mr-2 text-primary" />
              <label className="text-primary">Email</label>
            </div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-primary"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-1">
              <FaLock className="mr-2 text-primary" />
              <label className="text-primary">Password</label>
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-primary"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4">
            <div className="flex items-center mb-1">
              <FaLock className="mr-2 text-primary" />
              <label className="text-primary">Confirm Password</label>
            </div>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-primary"
              placeholder="Confirm your password"
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
              className="mr-2"
              required
            />
            <label className="text-primary">I accept the terms and conditions</label>
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-highlight px-4 py-2 rounded-lg font-bold hover:bg-secondary transition duration-300"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <GoogleLogin 
            onSuccess={handleGoogleSuccess} 
            onError={handleGoogleFailure} 
           
          />
        </div>

        {showPopup && (
          <Popup 
            message={error || message} 
            error={!!error} 
            onClose={closePopup} 
          />
        )}
      </div>
    </div>
  );
};

export default Register;
