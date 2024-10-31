import React from 'react';
import { motion } from 'framer-motion';
import HeaderComponent from '../header/Header';
import Footer from '../../Shared/components/Footer/Footer';
import DotExpandButton from '../../Shared/components/DotExpandButton/DotExpandButton'; // Import the button
import styles from './homePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.pageWrapper}>
      {/* Header - Part of the scrolling flow */}
      <HeaderComponent />

      {/* Main content container */}
      <div className={styles.homeMainContainer}>
        <section className={styles.heroSection}>
          <div className={styles.heroContent}>
            <h1>Be Safe Controls Environment</h1>
            <p>
              "Smart Lab: Committed to a Sustainable Environment with Precision and Comprehensive Analysis"
            </p>
            <button className={styles.getStartedButton}>Get Started</button>

            {/* Dot Expand Button */}
            <DotExpandButton label="Learn More" />
          </div>
        </section>

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <h2>We Make Awesome Products</h2>
          <p>You can create unlimited possibilities with our new item.</p>
          <div className={styles.servicesGrid}>
            <motion.div
              className={`${styles.serviceBox} ${styles.serviceBox1}`}
              whileHover={{ scale: 1.05 }}
            >
              <h3>Fully Responsive</h3>
              <p>Works good and so everyone can create a nice-looking landing page.</p>
              <DotExpandButton label="Try It Today" />
            </motion.div>
            <motion.div
              className={`${styles.serviceBox} ${styles.serviceBox2}`}
              whileHover={{ scale: 1.05 }}
            >
              <h3>24/7 Support</h3>
              <p>Get the support you need whenever you need it, around the clock.</p>
              <DotExpandButton label="Get Support" />
            </motion.div>
            <motion.div
              className={`${styles.serviceBox} ${styles.serviceBox3}`}
              whileHover={{ scale: 1.05 }}
            >
              <h3>High Quality</h3>
              <p>Providing high-quality products to ensure customer satisfaction.</p>
              <DotExpandButton label="Purchase Now" />
            </motion.div>
          </div>
        </section>
      </div>

      {/* Additional content container */}
      <div className={styles.homeSecondaryContainer}>
        <section className={styles.testimonialsSection}>
          <h2>What Our Clients Say</h2>
          <div className={styles.testimonialsGrid}>
            <div className={styles.testimonialBox}>
              <p>"SmartLab has transformed our lab environment with precision and quality!"</p>
              <span>- Client Name</span>
            </div>
            <div className={styles.testimonialBox}>
              <p>"The best support team I’ve ever worked with. Highly recommended!"</p>
              <span>- Another Client</span>
            </div>
          </div>
        </section>
      </div>

      {/* Footer - Part of the scrolling flow */}
      <Footer />
    </div>
  );
};

export default HomePage;
