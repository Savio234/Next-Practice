import React, { useState } from 'react';
import styles from './Slider.module.css';

const Slider = ({ slides }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const goToNextSlide = () => {
    setCurrentIndex(prevIndex => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.slider}>
        {slides.map((slide: any, index: number) => (
          <div
            key={index}
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            style={{ transform: `scale(${index === currentIndex ? 1.3 : 1})` }}
          >
            {/* <img src={slide} alt={`Slide ${index + 1}`} /> */}
          </div>
        ))}
      </div>
      <div className={styles.btns}>
        <button className={styles.prevButton} onClick={goToPrevSlide}>
          Prev
        </button>
        <button className={styles.nextButton} onClick={goToNextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Slider;