import React, { useState, useEffect, useRef } from 'react';
import { FiEdit, FiChevronDown, FiTrash, FiShare, FiPlusSquare } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './staggeredDropDown.module.css';

const StaggeredDropDown = ({ services, selectedService, setSelectedService, setHoveredService }) => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null); // ใช้ useRef เพื่อติดตาม dropdown

  // ฟังก์ชันปิด dropdown เมื่อคลิกข้างนอกหรือ scroll
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    const handleScroll = () => setOpen(false); // ปิด dropdown เมื่อมีการ scroll

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    // ลบ event listeners เมื่อออกจาก component
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.dropdownContainer} ref={dropdownRef}>
      <motion.div animate={open ? 'open' : 'closed'}>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className={styles.dropdownButton}
        >
          <span>Filter Services</span>
          <motion.span className={styles.iconWrapper} animate={{ rotate: open ? 180 : 0 }}>
            <FiChevronDown />
          </motion.span>
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial="closed"
              animate="open"
              exit="closed"
              variants={wrapperVariants}
              className={`${styles.optionsList} ${open ? styles.show : ''}`}
            >
              <Option 
                setOpen={setOpen} 
                Icon={FiEdit} 
                text="All Services" 
                onClick={() => setSelectedService("All")} 
              />
              {services.map((service) => (
                <Option
                  key={service.shortName}
                  setOpen={setOpen}
                  Icon={FiPlusSquare}
                  text={service.fullName}
                  onClick={() => setSelectedService(service.shortName)}
                  onMouseEnter={() => setHoveredService(service)}
                  onMouseLeave={() => setHoveredService(null)}
                />
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

const Option = ({ text, Icon, setOpen, onClick, onMouseEnter, onMouseLeave }) => {
  return (
    <motion.li
      variants={itemVariants}
      onClick={() => {
        setOpen(false);
        onClick && onClick();
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={styles.optionItem}
    >
      <Icon />
      <span>{text}</span>
    </motion.li>
  );
};

export default StaggeredDropDown;

const wrapperVariants = {
  open: {
    opacity: 1,
    scaleY: 1,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0,
    },
  },
  closed: {
    opacity: 0,
    scaleY: 0,
    transition: {
      when: 'afterChildren',
      staggerChildren: 0,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
};
