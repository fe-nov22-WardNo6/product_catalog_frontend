import React, { useContext, useState } from 'react';
import './cart.scss';
import { CartItem } from './CartItem';
import { ActionContext } from '../../context/ActionContext';
import { Modal } from '../Modal';
import { useNavigate } from 'react-router-dom';

export const Cart: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const { cartItems, clearCart } = useContext(ActionContext);
  const countArr = cartItems.map((el) => el.count);
  const countSum = getSum(countArr);
  const totalItem = cartItems.map((el) => el.count * el.price);
  const totalItems = getSum(totalItem);
  const navigate = useNavigate();
  const isDisabled = cartItems.length === 0;
  // const totalCost: number = cartItems.reduce((a, b) => a + b.price, 0);

  function getSum(arr: number[]) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  }

  const handleClearCart = () => {
    clearCart();
    setModalActive(false);
  };

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

          <button
            className="cart__total-button"
            disabled={isDisabled}
            onClick={() => setModalActive(true)}
          >
            Checkout
          </button>
        </div>
      </div>
      {modalActive && (
        <Modal setActive={setModalActive}>
          <h3 className="modal__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non ut
            adipisci animi velit rerum. Excepturi et adipisci quas aliquid,
            nobis error repudiandae consequatur inventore in soluta ut, omnis
            eos necessitatibus!
          </h3>
          <div className="modal__button-wrapper">
            <button className="modal__button" onClick={() => navigate('/')}>
              Home page
            </button>
            <button className="modal__button" onClick={() => handleClearCart()}>
              Clear cart
            </button>
          </div>
        </Modal>
      )}
    </div>
  );
};
