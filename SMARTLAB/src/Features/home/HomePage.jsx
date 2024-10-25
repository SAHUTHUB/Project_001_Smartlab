// src/features/home/HomePage.jsx
import React from 'react';
import HeaderComponent from '../header/Header';
import ServicesSection from '../../Shared/components/ServicesSection/ServicesSection';
import styles from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <HeaderComponent />
      <div className={styles.homeContainer}>
        <main className={styles.mainContent}>
          <section className={styles.heroSection}>
            <h1>Welcome to Our Environmental Testing Services</h1>
            <p>Providing sustainable solutions for every living space.</p>
          </section>
          <ServicesSection /> {/* Included the ServicesSection component */}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
