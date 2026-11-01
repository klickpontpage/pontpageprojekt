import React, { useEffect, useState } from 'react';
import './CustomCursor.css';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', move);
    return () => window.removeEventListener('mousemove', move);
  }, []);

  useEffect(() => {
    const targets = document.querySelectorAll('.hover-target');
    const enter = () => setHovering(true);
    const leave = () => setHovering(false);
    targets.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });
    return () => {
      targets.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovering ? 'active' : ''}`}
      style={{ top: position.y, left: position.x }}
    >
      {hovering && <span>Kattints</span>}
    </div>
  );
};

export default CustomCursor;
