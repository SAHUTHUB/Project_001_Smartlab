// src/features/header/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './header.module.css';
import logoImage from '/Users/sahutsky22/Desktop/smartlabin/src/assets/Pictures/logo_login.png';

const HeaderComponent = ({ user }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link to="/">
          <img src={logoImage} alt="MyLogo" className={styles.logoImage} />
        </Link>
        <div className={styles.logoText}>
          <h1>GFSL</h1>
          <p>grün für stadt + leben</p>
        </div>
      </div>
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/projects">Projekte</Link></li>
          <li><Link to="/current">Aktuelles</Link></li>
          <li className={styles.dropdownContainer}>
            <Link to="/about" aria-haspopup="true" aria-expanded="false">Büro</Link>
            <div className={styles.dropdown}>
              <Link to="/about/team">Team</Link>
              <Link to="/about/vision">Vision</Link>
            </div>
          </li>
          <li><Link to="/team">Team</Link></li>
          <li><Link to="/career">Karriere</Link></li>
          <li><Link to="/contacts">Kontakt</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
