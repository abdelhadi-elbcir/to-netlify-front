import React from 'react';
import { render, screen } from '@testing-library/react';
import userReducer from './state/userSlice.js'; 
import { act } from 'react';  // Updated import
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import App from './App';

// Create a mock store
const createMockStore = () => {
  return configureStore({
    reducer: {
      user: userReducer
    },
  });
};

// Custom render function that includes providers
const renderWithProviders = (component) => {
  const store = createMockStore();
  return render(
    <Provider store={store}>
      {component}
    </Provider>
  );
};

describe('App component', () => {
  test('renders Layout and AppRoutes within Router', async () => {
    await act(async () => {
      renderWithProviders(<App />);
    });
    
    
  });
});