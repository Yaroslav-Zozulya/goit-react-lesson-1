import ReactDOM from 'react-dom/client';
import App from './App';
import React from 'react';

const rootElement = document.querySelector('#root');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
