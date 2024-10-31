import React, { useState } from 'react';
import HeaderComponent from '../header/Header';
import Footer from '../../Shared/components/Footer/Footer';
import ServiceBox from '../../Shared/components/ServiceBoxs/ServiceBox';
import StaggeredDropDown from '../../Shared/components/Dropdowns/StaggeredDropDown';
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

  // เลือกข้อมูลที่จะใช้แสดงในกล่องโดยมีเงื่อนไขว่า ถ้า hoveredService มีค่าให้แสดงเฉพาะตัวนั้น
  const displayedServices = hoveredService
    ? [hoveredService] // แสดงเฉพาะกล่องที่เมาส์ชี้
    : services; // ถ้าไม่มีการชี้ แสดงกล่องทั้งหมด

  return (
    <div className={styles.reportWrapper}>
      <HeaderComponent />
      <div className={styles.reportContent}>
        
        {/* Dropdown Component */}
        <StaggeredDropDown 
          services={services} 
          selectedService={selectedService}
          setSelectedService={setSelectedService} 
          setHoveredService={setHoveredService}
        />

        {/* แสดงผลกล่อง ServiceBox */}
        <div className={styles.servicesSection}>
          <h2>Available Services</h2>
          <div className={styles.servicesGrid}>
            {displayedServices.map((service) => (
              <ServiceBox
                key={service.shortName}
                title={service.fullName}
                description={`${service.fullName} detailed analysis and monitoring.`}
                imageUrl={service.imageUrl}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ReportPage;
