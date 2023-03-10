import React, { useEffect, useState } from 'react';
import Button from '../Button/ Button';
import Dots from '../Dots/Dots';
import Slide from '../Slide/Slide';
import { BASE_URL, GIT_HUB_URLS } from '../../shared/constants';
import { useCounter } from '../../shared/useCounter';

const Slider = () => {
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const {
    value: slideIndex,
    INCREMENT,
    DECREMENT,
  } = useCounter(0, 1, GIT_HUB_URLS.length);
  // const isLoading = !error && !data;

  //receiving data from the server
  const doFetch = (url) => {
    setIsLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        setData({
          name: response.full_name,
          description: response.description,
          stars: response.stargazers_count,
          avatar: response.organization,
        });
        setIsLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    doFetch(BASE_URL + GIT_HUB_URLS[slideIndex]);
  }, [slideIndex]);

  //divide the code into logical blocks for easy testing
  return (
    <div className='container-slider'>
      {isLoading && <h3>Loading...</h3>}
      {error && (
        <h3>{`There is a problem fetching the data from gitHub API - ${error}`}</h3>
      )}
      <Slide {...data} />
      <Button moveSlide={() => INCREMENT()} direction={'next'} />
      <Button moveSlide={() => DECREMENT()} direction={'prev'} />
      <Dots slideIndex={slideIndex} arrLength={GIT_HUB_URLS.length} />
    </div>
  );
};

export default Slider;
