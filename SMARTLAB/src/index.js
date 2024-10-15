// src/index.js
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';

// Renders the App component to the <div id="root"></div>
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
);