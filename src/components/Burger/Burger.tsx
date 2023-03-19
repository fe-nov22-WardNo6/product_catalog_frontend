import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import cart_icon from '../../icons/cart.svg';
import favorites_icon from '../../icons/heart.svg';
import './Burger.scss';

export const Burger = () => {
  return (
    <div className='burger'>
      <div className='burger__content'>
        <div className="burger__buttons">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn('burger__button', { 'is-active': isActive })
            }
          >
              HOME
          </NavLink>
          <NavLink
            to="/phones"
            className={({ isActive }) =>
              cn('burger__button', { 'is-active': isActive })
            }
          >
              PHONES
          </NavLink>
          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              cn('burger__button', { 'is-active': isActive })
            }
          >
              TABLETS
          </NavLink>
          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              cn('burger__button', { 'is-active': isActive })
            }
          >
              ACCESSORIES
          </NavLink>
        </div>
        <div className="burger__actions">
          <NavLink
            to="/favorites"
            className={({ isActive }) =>
              cn('burger__action', { 'is-active': isActive })
            }
          >
            <img
              src={favorites_icon}
              alt="Nice Gadgets logo"
              className="icon"
            />
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn('burger__action', { 'is-active': isActive })
            }
          >
            <img src={cart_icon} alt="Nice Gadgets logo" className="icon" />
          </NavLink>
        </div>
      </div>
    </div>    
  );
};
