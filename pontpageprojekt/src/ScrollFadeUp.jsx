import React, { useRef, useState, useEffect } from 'react';
import './scrollfadeup.css';

const ScrollFadeUp = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect(); 
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-fade-up ${visible ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollFadeUp;
