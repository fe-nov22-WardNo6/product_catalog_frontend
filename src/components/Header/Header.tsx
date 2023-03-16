import React from 'react';
import { Logo } from '../Logo';
import cart_icon from './img/cart_icon.svg';
import favorites_icon from './img/favorites_icon.svg';
import './Header.scss';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="wrapper">
          <Logo />
          <div className="header__buttons">
            <a href="/home" className="header__button">
              HOME
            </a>
            <a href="/phones" className="header__button">
              PHONES
            </a>
            <a href="/tablets" className="header__button">
              TABLETS
            </a>
            <a href="/accessories" className="header__button">
              ACCESSORIES
            </a>
          </div>
        </div>
        <div className="header__actions">
          <a href="#" className="header__action">
            <img
              src={favorites_icon}
              alt="Nice Gadgets logo"
              className="icon"
            />
          </a>

          <a href="#" className="header__action">
            <img src={cart_icon} alt="Nice Gadgets logo" className="icon" />
          </a>
        </div>
      </div>
    </header>
  );
};
