// src/features/auth/LoginPage.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './loginPage.module.css';
import logo from '/Users/sahutsky22/Desktop/smartlabin/src/assets/Pictures/logo_login.png';

const LoginPage = ({ onClose, setCompanyName }) => {
  const [username, setUsername] = useState('user');
  const [password, setPassword] = useState('password');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'user' && password === 'password') {
      localStorage.setItem('isLoggedIn', 'true');
      setCompanyName(username);
      navigate('/home');
      onClose();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <motion.div
      className={styles.loginContainer}
      initial={{ x: '100%' }}
      animate={{ x: '0%' }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      <div className={styles.loginPopup}>
        <img src={logo} alt="Logo" className={styles.loginLogo} />
        <h1>Smart Lab Sign In</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.rememberMe}>
          <input type="checkbox" id="remember" name="remember" />
          <label htmlFor="remember">Remember</label>
        </div>
        <button onClick={handleLogin} className={styles.loginButton}>Login</button>
        <button onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </motion.div>
  );
};

export default LoginPage;
