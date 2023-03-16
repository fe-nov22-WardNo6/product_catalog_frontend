import React from 'react';
import classNames from 'classnames';
import './card.scss';
import image from './image.png';

type Props = {
  cardClass: string,
}

export const Card: React.FC<Props> = ({ cardClass}) => {
  return (
    <article className={classNames('card', `${cardClass}`)}>
      <img
        className="card__image"
        src={image}
        alt="APPLE A1419 iMac 27"
      />
      <h1 className="card__name">
        Apple iPhone 11 Pro Max 64GB Gold (iMT9G2FS/A)
      </h1>

      <div className="card__price">
        <p className="card__price-new">$799</p>

        <p className="card__price-old">$999</p>
      </div>

      <div className="card__line"></div>

      <div className="card__characteristics">
        <div className="card__char">
          <p className="card__char-text">Screen</p>

          <p className="card__char-number">6.5” OLED</p>
        </div>

        <div className="card__char">
          <p className="card__char-text">Capacity</p>

          <p className="card__char-number">64 GB</p>
        </div>

        <div className="card__char">
          <p className="card__char-text">RAM</p>

          <p className="card__char-number">4 GB</p>
        </div>
      </div>

      <div className="card__buttons">
        <a href="#AddToCart" className="card__buttons-addCart">
          Add to cart
        </a>
        <a href="#AddToList" className="card__buttons-addList"></a>
      </div>
    </article>
  );
};
