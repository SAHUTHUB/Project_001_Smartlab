import React from 'react';
import styles from './DotExpandButton.module.css';

const DotExpandButton = ({ label }) => {
  return (
    <div className={styles.dotButton}>
      <span className={styles.dot}></span>
      <span className={styles.expandContent}>{label}</span>
    </div>
  );
};

export default DotExpandButton;
