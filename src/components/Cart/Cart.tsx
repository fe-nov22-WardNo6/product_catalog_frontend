import React, { useContext, useState } from 'react';
import './cart.scss';
import { CartItem } from './CartItem';
import { ActionContext } from '../../context/ActionContext';
import { Modal } from '../Modal';
import { useNavigate } from 'react-router-dom';
import { Back } from '../Back';

export const Cart: React.FC = () => {
  const [modalActive, setModalActive] = useState(false);
  const { cartItems, clearCart } = useContext(ActionContext);
  const countArr = cartItems.map((el) => el.count);
  const countSum = getSum(countArr);
  const totalItem = cartItems.map((el) => el.count * el.price);
  const totalItems = getSum(totalItem);
  const navigate = useNavigate();
  const isDisabled = cartItems.length === 0;

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
    <>
      <div className="componemt__conteiner">
        <Back />
      </div>

      <div className="conteiner">
        <h1 className="cart__title">Cart</h1>

        <div className="cart__flex">
          {cartItems.length === 0 && (
            <div className="cart__without">
              There are no products in the cart
            </div>
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
              To confirm your order ...
            </h3>
            <div className="modal__button-wrapper">
              <button className="modal__button" onClick={() => navigate('/phones')}>
                Continue
              </button>
              <button className="modal__button" onClick={() => handleClearCart()}>
                Confirm
              </button>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
};
