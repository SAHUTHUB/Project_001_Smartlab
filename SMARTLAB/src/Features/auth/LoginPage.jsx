// src/features/auth/LoginPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './loginPage.module.css';
import logo from '/Users/sahutsky22/Desktop/smartlabin/src/assets/Pictures/logo_login.png';

const LoginPage = ({ onClose }) => {
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('password');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home');
      if (onClose) {
        onClose();
      }
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <div className={styles.leftPane}>
          <img src={logo} alt="Logo" className={styles.logo} />
        </div>
        <div className={styles.rightPane}>
          <h1>Login to Smart Lab</h1>
          <div className={styles.inputContainer}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={styles.inputField}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={styles.inputField}
            />
          </div>
          <button onClick={handleLogin} className={styles.loginButton}>Login</button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
