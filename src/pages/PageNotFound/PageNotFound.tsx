import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pageNotFoundIcon from '../../icons/pageNotFound.svg';
import './PageNotFound.scss';

export const PageNotFound = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(5);
  const timerId = setInterval(() => setSeconds(seconds - 1), 1000);

  useEffect(() => {
    setTimeout(() => { clearInterval(timerId); navigate('/');}, 5000);
  }, []);

  return (
    <div className='notFound'>
      <img src={pageNotFoundIcon} className='notFound__icon'></img>
      <h2 className='notFound__title'>{`You will be redirected to Home page after ${seconds} seconds...`}</h2>
    </div>
  );
};
