// src/Shared/components/ServicesSection/ServicesSection.jsx
import React from 'react';
import ServiceBox from '../../components/ServiceBoxs/ServiceBox';
import styles from './servicesSection.module.css';
import servicesData from '../../../data/servicesData'; // Import service data

const ServicesSection = () => {
  return (
    <section className={styles.servicesSection}>
      <h2>Our Services</h2>
      <p>We offer comprehensive testing services to protect the environment and public health.</p>
      <div className={styles.servicesGrid}>
        {servicesData.map((service) => (
          <ServiceBox
            key={service.id}
            title={service.fullName}
            description={service.description}
            imageUrl={service.imageUrl}
            price={service.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;