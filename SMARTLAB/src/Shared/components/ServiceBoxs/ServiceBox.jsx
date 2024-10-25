import React from 'react';
import styles from './ServiceBox.module.css';

const ServiceBox = ({ title, description, imageUrl }) => {
  return (
    <div className={styles.serviceBox}>
      <img src={imageUrl} alt={`${title} Image`} className={styles.serviceImage} />
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  );
};

export default ServiceBox;
