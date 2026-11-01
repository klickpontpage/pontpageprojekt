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
          // ha a böngésző nem engedi (pl. mobilon autoplay tiltás)
          setError(true);
        });
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleCanPlayThrough = () => {
    // itt biztosan van annyi buffer, hogy normálisan fusson
    if (onReady) {
      onReady();
    }
  };

  const handleLoadedData = () => {
    // ha szeretnéd hamarabb “ready”-nek tekinteni, itt is hívhatod:
    // onReady && onReady();
  };

  const handleError = () => {
    setError(true);
    // akár itt is jelezhetsz a parentnek, hogy fallbackre váltottál
    if (onReady) {
      onReady(); // így nem ragad bent a preloader, ha a videó sose tölt be
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
