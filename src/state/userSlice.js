import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Crée un "thunk" pour gérer l'appel API asynchrone
export const loginUser = (username, password) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:8081/api/auth/login', {
      username,
      password,
    });

    const { accessToken, refreshToken, user_id } = response.data;
    const name = username;

    // Dispatch l'action setUser une fois que l'API a réussi
    dispatch(setUser({ accessToken, refreshToken, name, user_id }));
  } catch (error) {
    console.error("Erreur lors de la connexion:", error);
    throw error;  // Permet au composant de gérer les erreurs si nécessaire
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState: {
    accessToken: null,
    refreshToken: null,
    name: null,
    user_id: null,
  },
  reducers: {
    setUser: (state, action) => {
      const { accessToken, refreshToken, name, user_id } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.name = name;
      state.user_id = user_id;

      // Stocker dans le localStorage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('name', name);
      localStorage.setItem('user_id', user_id);
    },
    clearUser: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.name = null;
      state.user_id = null;

      // Supprimer du localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('name');
      localStorage.removeItem('user_id');
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
