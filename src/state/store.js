// src/state/store.js
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice.js'; 

const loadUserFromLocalStorage = () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');

  if (accessToken && refreshToken) {
    return { accessToken, refreshToken };
  }
  return undefined; 
};

const store = configureStore({
  reducer: {
    user: userReducer,
  },
  preloadedState: {
    user: loadUserFromLocalStorage() || {
      accessToken: null,
      refreshToken: null,
    }
  },
});

export default store;  
