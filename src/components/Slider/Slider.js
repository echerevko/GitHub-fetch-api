import React, { useState } from 'react';
import { DATA_SLIDER } from '../../assets/fake-data';
import gitHub from '../../assets/images/gitHub.png';
import Button from '../Button/ Button';
import Dots from '../Dots/Dots';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const INCREMENT = () => {
    if (slideIndex !== DATA_SLIDER.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === DATA_SLIDER.length) {
      setSlideIndex(1);
    }
  };

  const DECREMENT = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(DATA_SLIDER.length);
    }
  };

  return (
    <div className='container-slider'>
      {DATA_SLIDER?.map((slide, index) => {
        return (
          <ul
            className={
              slideIndex === index + 1 ? 'slide active-slide' : 'slide'
            }
            key={slide.index}
          >
            <img src={gitHub} alt='gitHub' />
            <li>{slide.name}</li>
            <li>{slide.description}</li>
            <li>{slide.stars}</li>
          </ul>
        );
      })}
      <Button moveSlide={INCREMENT} direction={'next'} />
      <Button moveSlide={DECREMENT} direction={'prev'} />
      <Dots slideIndex={slideIndex} arrLength={DATA_SLIDER.length} />
    </div>
  );
};

export default Slider;
