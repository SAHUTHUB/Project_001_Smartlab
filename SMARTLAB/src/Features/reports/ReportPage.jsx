// src/features/reports/ReportPage.jsx
import React, { useState } from 'react';
import HeaderComponent from '../header/Header';
import Footer from '../../Shared/components/Footer/Footer';
import ServiceBox from '../../Shared/components/ServiceBoxs/ServiceBox';
import styles from './reportPage.module.css';

const services = [
  { shortName: "EEA", fullName: "Emission Air", imageUrl: '/assets/Pictures/factory-smoke-rises-obscuring-blue-sky.jpg' },
  { shortName: "EAA", fullName: "Ambient Air", imageUrl: '/assets/Pictures/moss.jpg' },
  { shortName: "EWA", fullName: "Workplace Air", imageUrl: '/assets/Pictures/moss.jpg' },
  { shortName: "EWW", fullName: "Waste Water", imageUrl: '/assets/Pictures/Wastewater-Flow.webp' },
  { shortName: "EDW", fullName: "Drinking Water", imageUrl: '/assets/Pictures/How-safe-is-drinking-water.jpg' },
  { shortName: "EUW", fullName: "Underground Water", imageUrl: '/assets/Pictures/ecologist-epidemiologist-evaluates-test-tube-contents-aginst-sewer-coming-out-ground-scaled.jpg' },
  { shortName: "EWT", fullName: "Water Testing", imageUrl: '/assets/Pictures/moss.jpg' },
  { shortName: "ESW", fullName: "Sea Water", imageUrl: '/assets/Pictures/moss.jpg' },
  { shortName: "EIT", fullName: "Soils Testing", imageUrl: '/assets/Pictures/soil-testing-agronomy-inspector-taking-soil-sampl-2021-08-26-16-53-52-utc-scaled.jpg' },
  { shortName: "ELT", fullName: "Solid Testing", imageUrl: '/assets/Pictures/moss.jpg' },
  { shortName: "EFT", fullName: "Fuel Testing", imageUrl: '/assets/Pictures/moss.jpg' },
  { shortName: "EGA", fullName: "Gas", imageUrl: '/assets/Pictures/moss.jpg' },
  { shortName: "EPT", fullName: "Plants Testing", imageUrl: '/assets/Pictures/plantpath1.jpg' },
  { shortName: "EST", fullName: "Sludge Testing", imageUrl: '/assets/Pictures/moss.jpg' },
  { shortName: "ECE", fullName: "CEMs", imageUrl: '/assets/Pictures/Air-Emissions-1024x576.webp' }
];

const ReportPage = () => {
  const [selectedService, setSelectedService] = useState("All");
  const [hoveredService, setHoveredService] = useState(null);

  // Function to filter services
  const filteredServices = selectedService === "All"
    ? services
    : services.filter(service => service.shortName === selectedService);

  return (
    <div className={styles.reportWrapper}>
      <HeaderComponent />
      <div className={styles.reportContent}>
        {/* Filter Section */}
        <div className={styles.filterSection}>
          <label htmlFor="serviceFilter">Filter by Service:</label>
          <select
            id="serviceFilter"
            value={selectedService}
            onChange={(e) => setSelectedService(e.target.value)}
            className={styles.filterSelect}
          >
            <option value="All">All Services</option>
            {services.map((service) => (
              <option
                key={service.shortName}
                value={service.shortName}
                onMouseEnter={() => setHoveredService(service)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {service.fullName}
              </option>
            ))}
          </select>
        </div>

        {/* Hovered Service Details */}
        {hoveredService && (
          <div className={styles.hoveredServiceDetails}>
            <ServiceBox
              title={hoveredService.fullName}
              description={`${hoveredService.fullName} detailed analysis and monitoring.`}
              imageUrl={hoveredService.imageUrl}
            />
          </div>
        )}

        {/* Services Section */}
        <section className={styles.servicesSection}>
          <h2>Available Services</h2>
          <div className={styles.servicesGrid}>
            {filteredServices.map((service, index) => (
              <ServiceBox
                key={index}
                title={service.fullName}
                description={`${service.fullName} detailed analysis and monitoring.`}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ReportPage;
