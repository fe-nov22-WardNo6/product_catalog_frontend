/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect, useState } from 'react';
import { getImage } from '../../api/api';
import { Phone } from '../../types/PhoneDefault';
import './PhoneDescription.scss';
import cn from 'classnames';
import { Link, NavLink } from 'react-router-dom';
import { AddButton } from '../AddButton';
import { Loader } from '../Loader';

type Props = {
  phone: Phone;
};

export const PhoneDescription: React.FC<Props> = ({ phone }) => {
  const [cardImage, setCardImage] = useState('');
  const [allImages, setAllImages] = useState<string[] | []>([]);
  const [isImageLoading, setIsImageLoading] = useState(false);
  const [isError, setError] = useState(false);

  const {
    name,
    images,
    priceDiscount,
    priceRegular,
    screen,
    resolution,
    capacity,
    ram,
    colorsAvailable,
    namespaceId,
    capacityAvailable,
    color,
  } = phone;

  const getImageFromServer = async () => {
    try {
      setIsImageLoading(true);

      const data = await getImage(images[0]);

      setCardImage(data);
      setIsImageLoading(false);
    } catch {
      setError(true);
      setIsImageLoading(false);
    } finally {
      setIsImageLoading(false);
    }
  };

  useEffect(() => {
    getImageFromServer();
  }, [phone]);

  const getAllImages = async () => {
    try {
      const data = await Promise.all(images.map((image) => getImage(image)));

      setAllImages(data);
      setIsImageLoading(false);
    } catch {
      setError(true);
      setIsImageLoading(false);
    } finally {
      setIsImageLoading(false);
    }
  };

  useEffect(() => {
    getAllImages();
  }, [phone]);

  const changeImage = (image: string) => {
    setCardImage(image);
  };

  return (
    <div className="phone-info info">
      <h2 className="phone-info__title">{name}</h2>

      <div className="info__section visual">
        <div className="visual__container visual__container--photo">
          <div className="visual__photo photo">
            <div className="photo__container">
              {isImageLoading && (
                <Loader />
              )}
              {!isError && !isImageLoading && (
                <img src={cardImage} alt="Phone image" className="photo__image" />
              )}
            </div>
          </div>

          <div className="visual__angles angles">
            {allImages.map((image) => {
              return (
                <button
                  type="button"
                  className="angles__container"
                  key={image}
                  onClick={() => changeImage(image)}
                >
                  {isImageLoading && (
                    <Loader />
                  )}
                  {!isError && !isImageLoading && (
                    <img src={image} alt="Phone image" className="angles__photo" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="visual__container visual__container--price">
          <div className="visual__container-price--section colors">
            <p className="visual__container-price--text">Available colors</p>
            <div className="colors__container">
              {colorsAvailable.map((color) => {
                const link = `${namespaceId}-${capacity.toLowerCase()}-${color}`;

                return (
                  <Link
                    to={`/phones/${link}`}
                    className={cn(`colors__color colors__${color}`)}
                    key={color}
                    title={color}
                  >
                    <div className={cn(`colors__fill-${color}`)}></div>
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="visual__container-price--section capacities">
            <p className="visual__container-price--text">Select capacity</p>
            <div className="capacities__container">
              {capacityAvailable.map((capacity) => {
                const link = `${namespaceId}-${capacity.toLowerCase()}-${color}`;

                return (
                  <NavLink
                    to={`/phones/${link}`}
                    className={({ isActive }) =>
                      cn('capacities__capacity', {
                        'capacities__capacity--isActive': isActive,
                      })
                    }
                    key={capacity}
                  >
                    {capacity}
                  </NavLink>
                );
              })}
            </div>
          </div>

          <div className="visual__container-price--section price-info">
            <div className="price-info__price">
              <p className="price-info__price-new">${priceDiscount}</p>

              <p className="price-info__price-old">${priceRegular}</p>
            </div>

            <AddButton phone={phone} />

            <div className="price-info__characteristics">
              <div className="price-info__char">
                <p className="price-info__char-text">Screen</p>

                <p className="price-info__char-number">{screen}</p>
              </div>

              <div className="price-info__char">
                <p className="price-info__char-text">Resolution</p>

                <p className="price-info__char-number">{resolution}</p>
              </div>

              <div className="price-info__char">
                <p className="price-info__char-text">Capacity</p>

                <p className="price-info__char-number">{capacity}</p>
              </div>

              <div className="price-info__char">
                <p className="price-info__char-text">RAM</p>

                <p className="price-info__char-number">{ram}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
