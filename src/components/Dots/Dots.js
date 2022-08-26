import React from 'react';

//implementation of points with a fake array
const Dots = ({ slideIndex, arrLength }) => {
  return (
    <div className='container-dots'>
      {Array.from({ length: arrLength }).map((item, index) => (
        <div
          key={index}
          className={slideIndex === index ? 'dot active' : 'dot'}
        >
          {' '}
        </div>
      ))}
    </div>
  );
};

export default Dots;
