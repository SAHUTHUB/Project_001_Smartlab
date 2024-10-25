// src/Shared/components/ServicesSection/ServicesSection.jsx
import React from 'react';
import ServiceBox from '../../components/ServiceBoxs/ServiceBox';
import styles from './servicesSection.module.css';

const ServicesSection = () => {
  const services = [
    {
      title: "Emission Air Testing",
      description: "Testing air emissions to ensure compliance with environmental standards.",
      imageUrl: "/assets/Pictures/Air-Emissions-1024x576.webp" // ใช้เส้นทางสัมพัทธ์แทน
    },
    {
      title: "Water Quality Testing",
      description: "Comprehensive water quality analysis for safety and compliance.",
      imageUrl: "/assets/Pictures/moss.jpg"
    },
    {
      title: "Soil Testing",
      description: "Analyzing soil samples to ensure safe and productive growth conditions.",
      imageUrl: "/assets/Pictures/soil-testing-agronomy-inspector-taking-soil-sampl-2021-08-26-16-53-52-utc-scaled.jpg"
    },
  ];

  return (
    <section className={styles.servicesSection}>
      <h2>Our Services</h2>
      <p>We offer comprehensive testing services to protect the environment and public health.</p>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <ServiceBox
            key={index}
            title={service.title}
            description={service.description}
            imageUrl={service.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
