import React from 'react';
import { Logo } from '../Logo';
import cart_icon from './img/cart_icon.svg';
import favorites_icon from './img/favorites_icon.svg';
import burger_menu_icon from './img/burger_menu_icon.svg';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="wrapper">
          <Logo />
          <div className="header__buttons">
            <NavLink
              to="/"
              className={({ isActive }) =>
                cn('header__button', { 'is-active': isActive })
              }
            >
              HOME
            </NavLink>
            <NavLink
              to="/phones"
              className={({ isActive }) =>
                cn('header__button', { 'is-active': isActive })
              }
            >
              PHONES
            </NavLink>
            <NavLink
              to="/tablets"
              className={({ isActive }) =>
                cn('header__button', { 'is-active': isActive })
              }
            >
              TABLETS
            </NavLink>
            <NavLink
              to="/accessories"
              className={({ isActive }) =>
                cn('header__button', { 'is-active': isActive })
              }
            >
              ACCESSORIES
            </NavLink>
          </div>
        </div>
        <div className="header__actions">
          <NavLink 
            to="/favorites"
            className={({ isActive}) => 
              cn('header__action', { 'is-active': isActive})
            }
          >
            <img src={favorites_icon} alt="Nice Gadgets logo" className="icon" />
          </NavLink>

          <NavLink 
            to="/cart"
            className={({ isActive}) => 
              cn('header__action', { 'is-active': isActive})
            }
          >
            <img src={cart_icon} alt="Nice Gadgets logo" className="icon" />
          </NavLink>

          <a href="#" className="header__action">
            <img
              src={burger_menu_icon}
              alt="Nice Gadgets logo"
              className="icon"
            />
          </a>
        </div>
      </div>
    </header>
  );
};
