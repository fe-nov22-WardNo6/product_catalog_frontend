import React, { useContext } from 'react';
import './cart.scss';
import { CartItem } from './CartItem';
import { ActionContext } from '../../context/ActionContext';

export const Cart: React.FC = () => {
  const { cartItems } = useContext(ActionContext);
  const countArr = cartItems.map((el) => el.count);
  const countSum = getSum(countArr);
  const totalItem = cartItems.map((el) => el.count * el.price);
  const totalItems = getSum(totalItem);
  // const totalCost: number = cartItems.reduce((a, b) => a + b.price, 0);

  function getSum(arr: number[]) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  }

  return (
    <div className="conteiner grid grid--desktop">
      <a href="/" className="cart__link grid__item-desktop--1-2">
        Back
      </a>

      <h1 className="cart__title">Cart</h1>

      <div className="cart__flex">
        {cartItems.length === 0 && (
          <div className="cart__without">There are no products in the cart</div>
        )}
        {cartItems.length > 0 && (
          <div className="cart__item">
            {cartItems.map((good) => (
              <CartItem key={good.id} good={good} />
            ))}
          </div>
        )}

        <div className="cart__total">
          <p className="cart__total-sum">{`$${totalItems}`}</p>

          <p className="cart__total-text">{`Total for ${countSum} items`}</p>

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
