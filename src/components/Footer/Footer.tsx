import React from 'react';
import './Footer.scss';
import '../../style/App.scss';
import arrowUp from '../../icons/arrowUp.svg';
import { Logo } from '../Logo';
import { NavLink } from 'react-router-dom';

export const Footer: React.FC = () => {
  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    console.log('to top');
  };

  return (
    <footer className="footer">
      <div className="container footer__wrapper">
        <Logo />
        <ul className="footer__list">
          <li className="footer__list_item">
            <a
              className="footer__list_link"
              href="https://github.com/orgs/fe-nov22-WardNo6/repositories"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </li>
          <li className="footer__list_item">
            <NavLink to="/contacts" className="footer__list_link">
              Contacts
            </NavLink>
          </li>
          <li className="footer__list_item">
            <a className="footer__list_link" href="#">
              Rights
            </a>
          </li>
        </ul>
        <div className="footer__top">
          <span className="footer__top__text">Back to top</span>
          <div className="footer__top__button" onClick={handleClick}>
            <img
              className="footer__top__button__icon"
              src={arrowUp}
              alt="to top"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
