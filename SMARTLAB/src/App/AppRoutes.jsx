// src/app/AppRoutes.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import HomePage from '../Features/home/HomePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />  {/* หน้า Login */}
      <Route path="/home" element={<HomePage />} />  {/* หน้า Home */}
    </Routes>
  );
};

export default AppRoutes;