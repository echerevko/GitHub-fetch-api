import React, { useEffect, useState } from 'react';
import Button from '../Button/ Button';
import Dots from '../Dots/Dots';
import Slide from '../Slide/Slide';
import { BASE_URL, GIT_HUB_URLS } from '../../shared/constants';
import { useCounter } from '../../shared/useCounter';
import { getData } from '../../shared/helpers';

const Slider = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const {
    value: slideIndex,
    INCREMENT,
    DECREMENT,
  } = useCounter(0, 1, GIT_HUB_URLS.length);

  useEffect(() => {
    setIsLoading(true);
    getData(BASE_URL + GIT_HUB_URLS[slideIndex]).then((response) => {
      setData({
        name: response.full_name,
        description: response.description,
        stars: response.stargazers_count,
        avatar: response.organization,
      });
      setIsLoading(false);
    });
  }, [slideIndex]);

  //divide the code into logical blocks for easy testing
  return (
    <div className='container-slider'>
      {isLoading && <p>Loading...</p>}
      <Slide {...data} />
      <Button moveSlide={() => INCREMENT()} direction={'next'} />
      <Button moveSlide={() => DECREMENT()} direction={'prev'} />
      <Dots slideIndex={slideIndex} arrLength={GIT_HUB_URLS.length} />
    </div>
  );
};

export default Slider;
