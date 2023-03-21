import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import pageNotFoundIcon from '../../icons/pageNotFound.svg';
import './PageNotfound.scss';

export const PageNotFound: React.FC = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(10);
  const timerId = setInterval(() => setSeconds(seconds - 1), 1000);

  useEffect(() => {
    setTimeout(() => {
      clearInterval(timerId);
      navigate('/');
    }, seconds * 1000);
  }, []);

  return (
    <div className="notFound container">
      <img src={pageNotFoundIcon} className="notFound__icon"></img>
      <h2 className="notFound__title">{`You will be redirected to Home page after ${seconds} seconds...`}</h2>
    </div>
  );
};
