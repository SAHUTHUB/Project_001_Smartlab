// src/features/header/SecondaryHeader.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css'; // Common styles
import secondaryStyles from './secondaryHeader.module.css'; // Unique styles

const SecondaryHeader = () => {
  return (
    <header className={`${styles.header} ${secondaryStyles.secondaryHeader}`}>
      <div className={styles.logo}>
        <Link to="/">
          <img src="/Users/sahutsky22/Desktop/smartlabin/src/assets/Pictures/logo_login.png" alt="MyLogo" className={styles.logoImage} />
        </Link>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/reports">Report</Link></li>
          <li className={styles.dropdownContainer}>
            <Link to="/about" aria-haspopup="true" aria-expanded="false">Büro</Link>
            <div className={styles.dropdown}>
              <Link to="/about/team">About</Link>
              <Link to="/about/vision">Vision</Link>
            </div>
          </li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/career">Karriere</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default SecondaryHeader;
