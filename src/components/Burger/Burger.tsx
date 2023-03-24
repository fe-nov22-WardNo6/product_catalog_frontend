import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import cart_icon from '../../icons/cart.svg';
import favorites_icon from '../../icons/heart.svg';
import './Burger.scss';
import { ActionContext } from '../../context/ActionContext';

type Props = {
  setIsBurgerActive: (boolean: boolean) => void;
};

export const Burger: React.FC<Props> = ({ setIsBurgerActive }) => {
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
            onClick={() => setIsBurgerActive(false)}
          >
            <img
              src={favorites_icon}
              alt="Nice Gadgets logo"
              className="icon"
            />

            {countSumFav > 0 && (
              <div className="burger__action-counter">{countSumFav}</div>
            )}
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              cn('burger__action', { 'is-active': isActive })
            }
            onClick={() => setIsBurgerActive(false)}
          >
            <img src={cart_icon} alt="Nice Gadgets logo" className="icon" />
            {countSumCart > 0 && (
              <div className="burger__action-counter">{countSumCart}</div>
            )}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
