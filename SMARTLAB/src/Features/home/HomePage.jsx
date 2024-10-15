// src/features/home/HomePage.jsx
import React from 'react';
import styles from './homePage.module.css';  // Import CSS module สำหรับการสไตล์

const HomePage = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Welcome to the Home Page</h1>
      <p>This is where the main content of the app will go.</p>
    </div>
  );
};

export default HomePage;