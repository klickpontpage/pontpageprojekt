import React from 'react';
import { motion } from 'framer-motion';

const ZoomInText = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
      transition={{
        duration: 2,              // ⏳ lassabb animáció
        ease: [0.25, 0.1, 0.25, 1], // 🎯 "easeInOut" jelleg – nagyon smooth
      }}
    >
      {children}
    </motion.div>
  );
};

export default ZoomInText;
