// src/app/AppRoutes.jsx
import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../features/auth/LoginPage';
import HomePage from '../features/home/HomePage';
import ReportPage from '../features/reports/ReportPage'; // Import ReportPage

// PrivateRoute to protect the routes that require authentication
const PrivateRoute = ({ element }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  return isLoggedIn ? element : <Navigate to="/login" />;
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />  {/* Login Page */}
      <Route path="/home" element={<PrivateRoute element={<HomePage />} />} /> {/* Home Page - Protected */}
      <Route path="/reports" element={<PrivateRoute element={<ReportPage />} />} /> {/* Report Page - Protected */}
      <Route path="*" element={<Navigate to="/login" />} />  {/* Redirect if no match */}
    </Routes>
  );
};

export default AppRoutes;
