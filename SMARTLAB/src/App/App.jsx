// src/app/App.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import AppRoutes from './AppRoutes';  // Import routing

const App = () => {
  const location = useLocation();

  return (
    <div className="app-container">
      <main>
        <AppRoutes />  {/* Manage routing between Login and Home */}
      </main>
    </div>
  );
};

export default App;