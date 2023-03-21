import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import cart_icon from '../../icons/cart.svg';
import favorites_icon from '../../icons/heart.svg';
import './Burger.scss';

type Props = {
  setIsBurgerActive: (boolean: boolean) => void;
};

export const Burger: React.FC<Props> = ({ setIsBurgerActive }) => {
  return (
    <div className="burger">
      <div className="burger__content">
        <div className="burger__buttons">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn('burger__button', { 'is-active': isActive })
            }
            onClick={() => setIsBurgerActive(false)}
          >
            HOME
          </NavLink>
          <NavLink
            to="/phones"
            className={({ isActive }) =>
              cn('burger__button', { 'is-active': isActive })
            }
            onClick={() => setIsBurgerActive(false)}
          >
            PHONES
          </NavLink>
          <NavLink
            to="/tablets"
            className={({ isActive }) =>
              cn('burger__button', { 'is-active': isActive })
            }
            onClick={() => setIsBurgerActive(false)}
          >
            TABLETS
          </NavLink>
          <NavLink
            to="/accessories"
            className={({ isActive }) =>
              cn('burger__button', { 'is-active': isActive })
            }
            onClick={() => setIsBurgerActive(false)}
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
