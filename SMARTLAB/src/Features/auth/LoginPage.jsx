// src/features/auth/LoginPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './loginPage.module.css';

const LoginPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/home');  // นำทางไปหน้า Home
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login</h1>
      <form>
        <div className={styles.formField}>
          <label>Email:</label>
          <input 
            type="email" 
            required 
          />
        </div>
        <div className={styles.formField}>
          <label>Password:</label>
          <input 
            type="password" 
            required 
          />
        </div>
        <button type="button" onClick={handleGoHome}>
          Go to Home
        </button>
      </form>
    </div>
  );
};

export default LoginPage;