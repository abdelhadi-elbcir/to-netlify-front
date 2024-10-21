import axios from 'axios';

const API_URL = 'http://localhost:8081/api/v1/user';

const UserService = {
  getUserById: async (userId) => {
    const response = await axios.get(`${API_URL}/${userId}`);
    return response.data;
  },
  updateUser: async (userId, userData) => {
    const response = await axios.put(`${API_URL}/${userId}`, userData);
    return response.data;
  },
};

export default UserService;
