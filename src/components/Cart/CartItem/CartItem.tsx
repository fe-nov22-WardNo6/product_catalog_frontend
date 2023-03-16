import React from 'react';
import './cartItem.scss';
import photo from './image.jpg';

export const CartItem: React.FC = () => {
  return (
    <div className='item'>
      <a href="#delete" className='item__remove'>
        x
      </a>

      <img src={photo} alt="phone" className='item__image'/>
      <div className='item__conteiner'>
        <p className='item__title'>
          Apple iPhone 14 Pro 128GB Silver (MQ023)
        </p>
      </div>
      
      <button className='item__button'>
        -
      </button>

      <p className='item__count'>1</p>

      <button className='item__button'>
        +
      </button>

      <p className='item__price'>
        $1099
      </p>
    </div>
  );
};