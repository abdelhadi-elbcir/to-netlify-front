import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as StateProvider } from 'react-redux';
import { store } from './state/store';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StateProvider store={store}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

reportWebVitals();
