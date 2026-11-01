import React, { useRef, useState, useEffect } from 'react';
import './ScrollZoomMotion.css';

const ScrollZoomMotion = ({ children, className = '' }) => {
  const ref = useRef(null);
  const [hasAppeared, setHasAppeared] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasAppeared(true);
          observer.disconnect(); 
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`scroll-zoom ${hasAppeared ? 'visible' : ''} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollZoomMotion;
