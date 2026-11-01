import React from 'react';
import './splittext.css';

const SplitText = ({
  text,
  className = '',
  speed = 'normal',
  variant = 'white', 
}) => {
  const delayStep = speed === 'fast' ? 0.015 : speed === 'slow' ? 0.1 : 0.05;

  return (
    <div className={className}>
      {text.split('').map((char, index) => {
        if (char === '\n') return <br key={index} />;

        return (
          <span
            key={index}
            className={`reveal-char ${variant === 'gradient' ? 'gradient-text' : 'white-text'}`}
            style={{
              animationDelay: `${index * delayStep}s`,
              animationDuration: speed === 'slow' ? '1s' : '0.5s',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        );
      })}
    </div>
  );
};

export default SplitText;
