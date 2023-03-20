import React, { useEffect, useState, useContext } from 'react';
import { getImage } from '../../api/api';
import { Phone } from '../../types/PhoneDefault';
import './card.scss';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { ActionContext } from '../../context/ActionContext';

type Props = {
  phone: Phone;
  gridClass: string;
};

export const Card: React.FC<Props> = ({ phone, gridClass }) => {
  const { addToCart } = useContext(ActionContext);
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

  return (
    <article className={cn('card', gridClass)}>
      <Link to={`/phones/${phoneId}`} >
        <div className="card__image-container">
          {isDataLoading && 'loading...'}

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
          className="card__buttons-addCart"
          onClick={() => addToCart(phone)}
        >
          Add to cart
        </button>
        <a href="#AddToList" className="card__buttons-addList"></a>
      </div>
    </article>
  );
};
