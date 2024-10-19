import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    accessToken: null,
    refreshToken: null,
    name: null,
    user_id: null
  },
  reducers: {
    setUser: (state, action) => {
      const { accessToken, refreshToken, name,user_id } = action.payload;
      state.accessToken = accessToken;
      state.refreshToken = refreshToken;
      state.name = name;
      state.user_id = user_id;
   

      // Stocker dans le localStorage
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('name', name);
      localStorage.setItem('user_id',user_id)
    },
    clearUser: (state) => {
      state.accessToken = null;
      state.refreshToken = null;
      state.name = null;
      state.user_id= null;

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
