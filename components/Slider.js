 import React, { useState, useEffect } from 'react';
import styles from '../styles/index.module.css'

function AutoImageSlider() {
  const images = [
    '/images/132.jpg',
    '/images/133.jpg',
    '/images/134.jpg',
    '/images/135.jpg',
    '/images/136.jpg',

    
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    const id = setInterval(() => {
      if (currentImageIndex === images.length - 1) {
        setCurrentImageIndex(0);
      } else {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    }, 3000);
    setIntervalId(id);
    return () => clearInterval(intervalId);
  }, [currentImageIndex, images.length]);

  return (
  

    <div className="image-slider" class={styles.imageslider2}>
      <img src={images[currentImageIndex]} alt="" />
      <input
        type="text"
     
        onChange={(e) => setCurrentText(e.target.value)}
      />
    </div>
  
  );
}

export default AutoImageSlider;







