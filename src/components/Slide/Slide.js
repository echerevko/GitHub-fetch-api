import React, { useMemo, useEffect } from 'react';
import gitHub from '../../assets/images/gitHub.png';

const SlideName = ({ name }) => {
  const newName = useMemo(
    () => name.substr(name.indexOf('/') + 1, name.length).toUpperCase(),
    [name]
  );
  useEffect(() => {
    document.title = newName;
  }, [newName]);

  return <div style={{ textAlign: 'center' }}>{newName}</div>;
};

// implementation of a single slide with the required data
const Slide = ({ name, description, stars, avatar }) => {
  const newStars = useMemo(() => Math.floor(stars / 1000), [stars]);
  const avatarUrl = avatar?.avatar_url;

  return (
    <div className='slide'>
      <img src={name ? avatarUrl : gitHub} alt='gitHub' />
      <ul className='list-wrapper '>
        {!name ? (
          'Item is undefined'
        ) : (
          <div>
            <li>
              Technology name:{' '}
              <b>
                <SlideName name={name} />
              </b>
            </li>
            <li>Description: {description}</li>
            <li>☆ {newStars}K</li>
          </div>
        )}
      </ul>
    </div>
  );
};

export default Slide;
