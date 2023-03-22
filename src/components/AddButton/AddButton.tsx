import React, { useContext, useEffect, useState } from 'react';
import { ActionContext } from '../../context/ActionContext';
import { Phone } from '../../types/PhoneDefault';
import cn from 'classnames';
import './AddButton.scss';

type Props = {
  phone: Phone;
};

export const AddButton: React.FC<Props> = ({ phone }) => {
  const {
    addToCart,
    removeAllFromCart,
    cartItems,
    favoritesItems,
    addToFavorites,
    removeFromFavorites,
  } = useContext(ActionContext);
  
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToFavorites, setAddedToFavorites] = useState(false);

  const checkCart = () => {
    if (cartItems.some((item) => item.id === phone.id)) {
      setAddedToCart(true);
    }
  };

  useEffect(() => {
    checkCart();
  }, [cartItems]);

  const checkFavorites = () => {
    if (favoritesItems.some((item) => item.id === phone.id)) {
      setAddedToFavorites(true);
    }
  };

  useEffect(() => {
    checkFavorites();
  }, [favoritesItems]);
  
  const handleAddToCart = () => {
    if (addedToCart) {
      removeAllFromCart(phone);
      setAddedToCart(false);
    } else {
      addToCart(phone);
      setAddedToCart(true);
    }
  };

  const handleAddToFavorites = () => {
    if (addedToFavorites) {
      removeFromFavorites(phone);
      setAddedToFavorites(false);
    } else {
      addToFavorites(phone);
      setAddedToFavorites(true);
    }
  };

  return (
    <div className="buttons">
      <button
        className={cn('buttons-addCart', {
          'buttons-addCart--added': addedToCart,
        })}
        onClick={() => handleAddToCart()}
      >
        {addedToCart ? 'Added to cart' : 'Add to cart'}
      </button>
      <button
        className={cn('buttons-addList', {
          'buttons-addList--active': addedToFavorites,
        })}
        onClick={() => handleAddToFavorites()}
      ></button>
    </div>
  );
};