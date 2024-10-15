// src/app/App.jsx
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';  // Import routing

const App = () => {
  return (
    <Router>
      <AppRoutes />  {/* แสดง routing ที่เรากำหนด */}
    </Router>
  );
};

export default App;