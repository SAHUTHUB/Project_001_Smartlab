// src/app/AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import HomePage from '../features/home/HomePage';

const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />  {/* Login Page */}
      <Route path="/home" element={<HomePage />} />
      <Route path="*" element={<Navigate to="/login" />} />  {/* Redirect if no match */}
    </Routes>
  );
};

export default AppRoutes;
