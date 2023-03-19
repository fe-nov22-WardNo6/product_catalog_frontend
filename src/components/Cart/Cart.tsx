import React, { useContext, useState } from 'react';
import './cart.scss';
import { CartItem } from './CartItem';
import { ActionContext } from '../../context/ActionContext';

export const Cart: React.FC = () => {
  const { addedToBuyPhones } = useContext(ActionContext);
  const [fullCost] = useState(0);

  return (
    <div className="conteiner">
      <a href="#home" className="cart__link">
        <svg
          className="cart__link-svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4715 3.52861C10.2111 3.26826 9.78903 3.26826 9.52868 3.52861L5.52868 7.52861C5.26833 7.78896 5.26833 8.21107 5.52868 8.47141L9.52868 12.4714C9.78903 12.7318 10.2111 12.7318 10.4715 12.4714C10.7318 12.2111 10.7318 11.789 10.4715 11.5286L6.94289 8.00001L10.4715 4.47141C10.7318 4.21107 10.7318 3.78896 10.4715 3.52861Z"
          />
        </svg>
        Back
      </a>

      <h1 className="cart__title">Cart</h1>

      <div className="cart__flex">
        {addedToBuyPhones.length === 0 &&
          <div className='cart__without'>
            There are no products in the cart
          </div>
        } 
        {addedToBuyPhones.length > 0 &&
          <div className="cart__item">
            {addedToBuyPhones.map((prod) => (
              <CartItem key={prod.id} prod={prod} />
            ))}
          </div>
        } 
        

        <div className="cart__total">
          <p className="cart__total-sum">{fullCost}</p>

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
