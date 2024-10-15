// src/features/home/HomePage.jsx
import React from 'react';
import styles from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to the Home Page</h1>
      <p>You have successfully logged in!</p>
    </div>
  );
};

export default HomePage;