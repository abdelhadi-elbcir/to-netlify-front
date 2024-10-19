import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js'; 

// Fonction pour charger les données utilisateur depuis le localStorage
const loadUserFromLocalStorage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const name = localStorage.getItem('name');
  const user_id = localStorage.getItem('user_id');


  if (accessToken && refreshToken && name && user_id) {
    return {
      accessToken,
      refreshToken,
      name,
      user_id,
    };
  }

  // Si l'utilisateur n'est pas trouvé dans le localStorage
  return {
    accessToken: null,
    refreshToken: null,
    name: null,
    user_id :null,
  };
};

// Configuration du store Redux
const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: {
    user: loadUserFromLocalStorage(),
  },
});

export default store;
