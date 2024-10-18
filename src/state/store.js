import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js'; 

// Fonction pour charger les données utilisateur depuis le localStorage
const loadUserFromLocalStorage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const name = localStorage.getItem('name');


  if (accessToken && refreshToken && name ) {
    return {
      accessToken,
      refreshToken,
      name,
    
    };
  }

  // Si l'utilisateur n'est pas trouvé dans le localStorage
  return {
    accessToken: null,
    refreshToken: null,
    name: null,
   
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
