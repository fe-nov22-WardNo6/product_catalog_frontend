import React from 'react';
import { Link } from 'react-router-dom';
import home from '../../icons/home.svg';
import './UnderConstraction.scss';

export const UnderConstraction: React.FC = () => {
  return (
    <div className="conteiner">
      <div className="under__wrapper">
        <div className="typewriter">
          <div className="slide">
            <i></i>
          </div>
          <div className="paper"></div>
          <div className="keyboard"></div>
        </div>
        <h1 className="under__title">Coming soon...</h1>
        <Link to="/" className="under__button">
          <div className="under__button-container">
            <img src={home} alt="Home" className="under__button-image" />
            <p className="under__button-title">Home</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
