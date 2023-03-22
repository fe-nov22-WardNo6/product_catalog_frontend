import React, {useContext} from 'react';
import { Logo } from '../Logo';
import cart_icon from '../../icons/cart.svg';
import favorites_icon from '../../icons/heart.svg';
import burger_close_icon from '../../icons/close.svg';
import burger_menu_icon from '../../icons/menu.svg';
import './Header.scss';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { ActionContext } from '../../context/ActionContext';


type Props = {
  setIsBurgerActive: (boolean: boolean) => void;
  isBurgerActive: boolean;
};

export const Header: React.FC<Props> = ({
  setIsBurgerActive,
  isBurgerActive,
}) => {
  const { cartItems, favoritesItems } = useContext(ActionContext);
  const countArrCart = cartItems.map((el) => el.count);
  const countSumCart = getSum(countArrCart);
  const countArrFav = favoritesItems.map((el) => el.count);
  const countSumFav = getSum(countArrFav);

  function getSum(arr: number[]) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  }

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
            className={({ isActive }) =>
              cn('header__action', { 'is-active': isActive })
            }
          >
            <img
              src={favorites_icon}
              alt="Nice Gadgets logo"
              className="icon"
            />

            {countSumFav > 0 && <div className='header__action-counter'>
              {countSumFav}
            </div>}
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn('header__action', { 'is-active': isActive })
            }
          >
            <img src={cart_icon} alt="Nice Gadgets logo" className="icon" />

            {countSumCart > 0 && <div className='header__action-counter'>
              {countSumCart}
            </div>}
          </NavLink>
          {isBurgerActive ? (
            <button
              className="header__action"
              onClick={() => setIsBurgerActive(false)}
            >
              <img
                src={burger_close_icon}
                alt="Nice Gadgets logo"
                className="icon"
              />
            </button>
          ) : (
            <button
              className="header__action"
              onClick={() => setIsBurgerActive(true)}
            >
              <img
                src={burger_menu_icon}
                alt="Nice Gadgets logo"
                className="icon"
              />
            </button>
          )}
        </div>
      </div>
    </header> 
  );
};
