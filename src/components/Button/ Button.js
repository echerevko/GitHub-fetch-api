import React from 'react';
import leftBtn from '../../assets/icons/left-btn.svg';
import rightBtn from '../../assets/icons/right-btn.svg';

//implementation of buttons using .svg
const Button = ({ moveSlide, direction }) => {
  return (
    <div>
      <button
        onClick={moveSlide}
        className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}
      >
        <img src={direction === 'next' ? rightBtn : leftBtn} alt='' />
      </button>
    </div>
  );
};

export default Button;
