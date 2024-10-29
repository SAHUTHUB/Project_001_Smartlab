// src/Shared/components/Footer/Footer.jsx
import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftSection}>
          <p>&copy; {new Date().getFullYear()} SmartLab. All rights reserved.</p>
        </div>
        <div className={styles.rightSection}>
          <p>
            Follow us: 
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"> Facebook</a> | 
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"> Twitter</a> | 
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"> LinkedIn</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
