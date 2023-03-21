import React, { useEffect, useState, useContext } from 'react';
import { getImage } from '../../api/api';
import { Phone } from '../../types/PhoneDefault';
import './card.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ActionContext } from '../../context/ActionContext';
import { Loader } from '../Loader';

type Props = {
  phone: Phone;
  gridClass: string;
};

export const Card: React.FC<Props> = ({ phone, gridClass }) => {
  const {
    addToCart,
    removeAllFromCart,
    cartItems,
    favoritesItems,
    addToFavorites,
    removeFromFavorites
  } = useContext(ActionContext);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToFavorites, setAddedToFavorites] = useState(false);
  const [cardImage, setCardImage] = useState('');
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setError] = useState(false);

  const { name, image, price, fullPrice, screen, capacity, ram, phoneId } =
    phone;

  const getImageFromServer = async () => {
    try {
      setIsDataLoading(true);

      const data = await getImage(image);

      setCardImage(data);
      setIsDataLoading(false);
    } catch {
      setError(true);
      setIsDataLoading(false);
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    getImageFromServer();
  }, []);

  const checkCart = () => {
    if (cartItems.some((item) => item.id === phone.id)) {
      setAddedToCart(true);
    }
  };

  useEffect(() => {
    checkCart();
  }, [cartItems]);

  const checkFavorites = () => {
    if (favoritesItems.some(item => item.id === phone.id)) {
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
    <article className={cn('card', gridClass)}>
      <Link to={`/phones/${phoneId}`}>
        <div className="card__image-container">
          {isDataLoading && <Loader />}

          {!isDataLoading && !isError && (
            <img className="card__image" src={cardImage} alt={name} />
          )}
          {isError && 'not found'}
          <h1 className="card__name">{name}</h1>
        </div>

        <div className="card__price">
          <p className="card__price-new">${price}</p>

          <p className="card__price-old">${fullPrice}</p>
        </div>

        <div className="card__line"></div>

        <div className="card__characteristics">
          <div className="card__char">
            <p className="card__char-text">Screen</p>

            <p className="card__char-number">{screen}</p>
          </div>

          <div className="card__char">
            <p className="card__char-text">Capacity</p>

            <p className="card__char-number">{capacity}</p>
          </div>

          <div className="card__char">
            <p className="card__char-text">RAM</p>

            <p className="card__char-number">{ram}</p>
          </div>
        </div>
      </Link>
      <div className="card__buttons">
        <button
          className={cn('card__buttons-addCart',
            {'card__buttons-addCart--added': addedToCart}
          )}
          onClick={() => handleAddToCart()}
        >
          {addedToCart ? 'Added to cart' : 'Add to cart'}
        </button>
        <button
          className={cn('card__buttons-addList',
            {'card__buttons-addList--active': addedToFavorites}
          )}
          onClick={() => handleAddToFavorites()}
        ></button>
      </div>
    </article>
  );
};