import React from 'react';
import '../../style/grid.scss';
import './cart.scss';
import { CartItem } from './CartItem';

export const Cart: React.FC = () => {
  return (
    <div className='conteiner grid grid--desktop'>
      <a 
        href="#home"
        className='cart__link grid__item-desktop--1-2'
      >
        Back
      </a>

      <h1 className='cart__title grid__item-desktop--1-3'>
        Cart
      </h1>

      <div className='grid__item-desktop--1-16'>
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </div>

      <div className='cart__total grid__item-desktop--17-24'>
        <p className='cart__total-sum'>
          $2657
        </p>

        <p className='cart__total-text'>
          Total for 4 items
        </p>

        <div className='cart__total-line'>

        </div>

        <button className='cart__total-button'>
          Checkout
        </button>
      </div>
    </div>
  );
};