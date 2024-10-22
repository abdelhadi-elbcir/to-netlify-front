import apiClient from './ApiConfig';

const API_URL = 'http://localhost:8081/api/v1/user';

const UserService = {
  getUserById: async (userId) => {
    const response = await apiClient.get(`${API_URL}/${userId}`);
    return response.data;
  },
  updateUser: async (userId, userData) => {
    const response = await apiClient.post(
      `${API_URL}/profile/${userId}`, 
      userData, 
      {
        headers: {
          'Content-Type': 'multipart/form-data' 
        }
      }
    );
    return response.data;
  },
};

export default UserService;
