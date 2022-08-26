import React from 'react';
import gitHub from '../../assets/images/gitHub.png';

// implementation of a single slide with the required data
const Slide = ({ name, description, stars }) => {
  return (
    <div className='slide'>
      <img src={gitHub} alt='gitHub' />
      <ul className='list-wrapper '>
        {!name ? (
          'Item is undefined'
        ) : (
          <div>
            <li>
              Technology name:{' '}
              <b>
                {!name
                  ? 'Item is undefined'
                  : name
                      .substr(name.indexOf('/') + 1, name.length)
                      .toUpperCase()}
              </b>
            </li>
            <li>Description: {description}</li>
            <li>☆ {Math.floor(stars / 1000)}K</li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Slide;
