import React, { useEffect, useRef, useState } from 'react';
import './BackgroundVideo.css';
import video from './img/bcsmall.mp4';
import fallback from './img/bcfallback.png';

function BackgroundVideo({ onReady }) {
  const videoRef = useRef(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          
          setError(true);
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCanPlayThrough = () => {
    
    if (onReady) {
      onReady();
    }
  };

  const handleLoadedData = () => {
    
  };

  const handleError = () => {
    setError(true);
    
    if (onReady) {
      onReady(); 
    }
  };

  return (
    <div className="video-container zoom-square">
      {!error ? (
        <video
          ref={videoRef}
          loop
          muted
          playsInline
          poster={fallback}
          preload="auto"
          onError={handleError}
          onCanPlayThrough={handleCanPlayThrough}
          onLoadedData={handleLoadedData}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        <img
          src={fallback}
          alt="Background fallback"
          className="background-fallback"
        />
      )}

      <div className="video-overlay"></div>
    </div>
  );
}

export default BackgroundVideo;
