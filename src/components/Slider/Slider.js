import React, { useEffect, useState } from 'react';
import Button from '../Button/ Button';
import Dots from '../Dots/Dots';
import Slide from '../Slide/Slide';
import { BASE_URL, GIT_HUB_URLS } from '../../shared/constants';

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [data, setData] = useState({});
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  //receiving data from the server
  const doFetch = async (url) => {
    await fetch(BASE_URL + url)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        setData({
          name: response.full_name,
          description: response.description,
          stars: response.stargazers_count
        });
        setIsLoading(true);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setIsLoading(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    doFetch(GIT_HUB_URLS[slideIndex]);
  }, [slideIndex]);

  //slide right, INCREMENT
  const INCREMENT = () => {
    if (slideIndex < GIT_HUB_URLS.length - 1) {
      setSlideIndex((prev) => prev + 1);
    }
  };

  //slide left, DECREMENT
  const DECREMENT = () => {
    if (slideIndex === 0) {
      return;
    } else {
      setSlideIndex((prev) => prev - 1);
    }
  };

  //divide the code into logical blocks for easy testing
  return (
    <div className='container-slider'>
      {isLoading && <h1>Loading...</h1>}
      {error && (
        <div>{`There is a problem fetching the data from gitHub API - ${error}`}</div>
      )}
      <Slide {...data} />
      <Button moveSlide={INCREMENT} direction={'next'} />
      <Button moveSlide={DECREMENT} direction={'prev'} />
      <Dots slideIndex={slideIndex} arrLength={GIT_HUB_URLS.length} />
    </div>
  );
};

export default Slider;
