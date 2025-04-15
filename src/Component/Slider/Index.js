import React from 'react';
import { useEffect, useState } from 'react';
import './Index.css';

function Index() {
    const totalSlides = 5;
  const [currentSlide, setCurrentSlide] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev % totalSlides) + 1);
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className='contenidoslider'>
      {[1, 2, 3, 4, 5].map((i) => (
        <React.Fragment key={i}>
          <input
            type="radio"
            id={`trigger${i}`}
            name="slider"
            checked={currentSlide === i}
            onChange={() => setCurrentSlide(i)}
          />
          <label htmlFor={`trigger${i}`}>
            <span className="sr-only">Slide {i}</span>
          </label>
          <div className={`slide bg${i}`}></div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Index;