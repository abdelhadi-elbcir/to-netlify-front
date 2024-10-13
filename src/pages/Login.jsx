import React, { useState } from 'react';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#FFFBE6]">
      <div className="w-full max-w-md bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold text-[#347928] mb-6">Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-[#347928]">Adresse Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#347928]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-[#347928]">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg text-[#347928]"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#347928] text-[#FFFBE6] px-4 py-2 rounded-lg font-bold hover:bg-[#C0EBA6] transition duration-300"
          >
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-center text-[black]">
          Vous n'avez pas un compte?{' '}
          <a href="/register" className="text-[#347928] hover:underline">
            Creer votre compte
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
