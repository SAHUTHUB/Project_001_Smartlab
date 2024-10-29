// src/features/home/HomePage.jsx
import React from 'react';
import HeaderComponent from '../header/Header';
import Footer from '../../Shared/components/Footer/Footer';
import styles from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      <HeaderComponent />
      <div className={styles.homeContainer}>
        <main className={styles.mainContent}>
          {/* Hero Section */}
          <section className={styles.heroSection}>
            <div className={styles.heroContent}>
              <h1>Be Safe Controls Environment</h1>
              <p>
                "Smart Lab: Committed to a Sustainable Environment with Precision and Comprehensive Analysis"
              </p>
              <button className={styles.getStartedButton}>Get Started</button>
            </div>
          </section>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
