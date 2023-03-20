import React, { useContext } from 'react';
import './cart.scss';
import { CartItem } from './CartItem';
import { ActionContext } from '../../context/ActionContext';

export const Cart: React.FC = () => {
  const { addedToBuyPhones } = useContext(ActionContext);

  return (
    <div className="conteiner grid grid--desktop">
      <a href="#home" className="cart__link grid__item-desktop--1-2">
        Back
      </a>

      <h1 className="cart__title">Cart</h1>

      <div className="cart__flex">
        <div className="cart__item">
          {addedToBuyPhones.map((prod) => (
            <CartItem key={prod.id} prod={prod} />
          ))}
        </div>

        <div className="cart__total">
          <p className="cart__total-sum">$2657</p>

          <p className="cart__total-text">Total for 4 items</p>

          <div className="cart__total-line"></div>

          <a
            className="cart__total-link"
            href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
          >
            <button className="cart__total-button">Checkout</button>
          </a>
        </div>
      </div>
    </div>
  );
};
