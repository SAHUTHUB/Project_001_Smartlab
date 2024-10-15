// src/features/auth/LoginPage.jsx
import React, { useState } from 'react';
import styles from './loginPage.module.css';  // Import CSS module สำหรับการสไตล์

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // เพิ่ม logic การเข้าสู่ระบบที่นี่
    console.log('Logging in with:', { email, password });
  };

  return (
    <div className={styles.loginContainer}>
      <h1>Login to Your Account</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label>Email:</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className={styles.formField}>
          <label>Password:</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;