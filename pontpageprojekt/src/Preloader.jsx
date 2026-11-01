import React, { useEffect, useState } from 'react';
import './Preloader.css';
import logo from './img/logo2.png';
import { motion, AnimatePresence } from 'framer-motion';
import sphere from './img/vagotthatter.png';

const sharedLogoTransition = { type: "tween", duration: 1.5, ease: "easeInOut" };

const Preloader = ({ readyToHide, onFinish }) => {
  const [startSplit, setStartSplit] = useState(false);
  const [exit, setExit] = useState(false);

  // Ha a videó (vagy más asset) készen áll, akkor indítjuk az animációt és a kifutást
  useEffect(() => {
    if (!readyToHide) return;

    // függöny nyitás indul
    setStartSplit(true);

    // egy kis idő, amíg a split animáció lefut
    const splitTimer = setTimeout(() => {
      setExit(true); // kifutás / eltűnés
    }, 1000); // ennyi ideig tartson a "split"

    const finishTimer = setTimeout(() => {
      onFinish(); // végleg eltüntetjük a preloader komponenst
    }, 1800); // 1000ms split + ~800ms kifutás

    return () => {
      clearTimeout(splitTimer);
      clearTimeout(finishTimer);
    };
  }, [readyToHide, onFinish]);

  return (
    <AnimatePresence>
      {!exit && (
        <div className={`preloader-container ${startSplit ? 'split' : ''}`}>
          <motion.img
            src={logo}
            alt="Loading Logo"
            className="loading-logo"
            layoutId="logo"
            initial={{ y: 10 }}
            animate={startSplit ? { y: -120 } : { y: 0 }}
            transition={sharedLogoTransition}
          />

          <div className="loading-sphere-container">
            <motion.img
              src={sphere}
              alt="Sphere"
              className="loading-sphere"
              layoutId="sphere"
              initial={{ scale: 0 }}
              animate={startSplit ? { scale: 0.6 } : { scale: 0.4 }}
              transition={sharedLogoTransition}
            />
          </div>

          {/* Progress bar container */}
          <div className="progress-bar-wrapper">
            <div className="progress-bar"></div>
          </div>

          <p className="preloader-credit">Made by Erik Sasfalvi</p>
        </div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
