import React from 'react';

const Dots = ({ slideIndex, arrLength }) => {
  return (
    <div className='container-dots'>
      {Array.from({ length: arrLength }).map((item, index) => (
        <div
          key={index}
          className={slideIndex === index + 1 ? 'dot active' : 'dot'}
        >
          {' '}
        </div>
      ))}
    </div>
  );
};

export default Dots;
