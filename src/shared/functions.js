import { useState } from 'react';

export const useCounter = (initialValue, delta, urlLength) => {
  const [value, setValue] = useState(initialValue);

  const INCREMENT = () => {
    if (value < urlLength - 1) {
      setValue((prev) => prev + delta);
    }
  };

  //slide left, DECREMENT
  const DECREMENT = () => {
    if (value === 0) {
      return;
    } else {
      setValue((prev) => prev - delta);
    }
  };

  return {
    value,
    INCREMENT,
    DECREMENT,
    urlLength
  };
};
