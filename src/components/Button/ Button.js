import React from 'react';
import leftBtn from '../../assets/icons/left-btn.svg';
import rightBtn from '../../assets/icons/right-btn.svg';

//implementation of buttons using .svg
const Button = ({ moveSlide, direction }) => {
  const newClassName =
    direction === 'next' ? 'btn-slide next' : 'btn-slide prev';
  const newDirection = direction === 'next' ? rightBtn : leftBtn;

  return (
    <div>
      <button onClick={() => moveSlide()} className={newClassName}>
        <img src={newDirection} alt='' />
      </button>
    </div>
  );
};

export default Button;
