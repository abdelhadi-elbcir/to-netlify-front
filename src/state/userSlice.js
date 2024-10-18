import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    accessToken: null,
    refreshToken: null,
    name: null,
   
  },
  reducers: {
    setUser: (state, action) => {
      const { accessToken, refreshToken, name } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.name = name;
   

      // Stocker dans le localStorage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('name', name);
  
    },
    clearUser: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.name = null;
   

      // Supprimer du localStorage
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
      localStorage.removeItem('name');
   
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;

export default userSlice.reducer;
