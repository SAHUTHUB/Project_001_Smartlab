// src/Shared/components/ServiceBoxs/ServiceBox.jsx
import React from 'react';
import styles from './serviceBox.module.css';

const ServiceBox = ({ title, description, imageUrl, price }) => {
  return (
    <div className={styles.serviceBox}>
      <img src={imageUrl} alt={`${title} Image`} className={styles.serviceImage} />
      <h3 className={styles.serviceTitle}>{title}</h3>
      <p className={styles.serviceDescription}>{description}</p>
      <div className={styles.servicePrice}>
        <span>{price}</span>
      </div>
      <button className={styles.addButton}>Learn More</button>
    </div>
  );
};

export default ServiceBox;