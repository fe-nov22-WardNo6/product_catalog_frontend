import React, { useEffect, useState } from 'react';
import { getImage } from '../../api/api';
import { Phone } from '../../types/PhoneDefault';
import './PhoneDescription.scss';
import cn from 'classnames';

type Props = {
  phone: Phone;
};

export const PhoneDescription: React.FC<Props> = ({ phone }) => {
  const [cardImage, setCardImage] = useState('');
  const [allImages, setAllImages] = useState<string[] | []>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setError] = useState(false);
  const availableColors = ['gold', 'grey', 'black', 'white'];
  const availableCapacities = [64, 256, 512];

  const {
    name,
    images,
    priceDiscount,
    priceRegular,
    screen,
    resolution,
    capacity,
    ram,
  } = phone;

  const getImageFromServer = async () => {
    try {
      setIsDataLoading(true);

      const data = await getImage(images[0]);

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

  const getAllImages = async () => {
    try {
      const data = await Promise.all(images.map((image) => getImage(image)));
      console.log(data);

      setAllImages(data);
      setIsDataLoading(false);
    } catch {
      setError(true);
      setIsDataLoading(false);
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const changeImage = (image: string) => {
    setCardImage(image);
  };

  console.log(cardImage);

  return (
    <div className="phone-info info">
      <h2 className="phone-info__title">{name}</h2>

      <div className="info__section visual">
        <div className="visual__container visual__container--photo">
          <div className="visual__photo photo">
            <div className="photo__container">
              <img src={cardImage} alt="Phone image" className="photo__image" />
            </div>
          </div>

          <div className="visual__angles angles">
            {allImages.map((image) => (
              <button
                type="button"
                className="angles__container"
                key={image}
                onClick={() => changeImage(image)}
              >
                <img src={image} alt="Phone image" className="angles__photo" />
              </button>
            ))}
          </div>
        </div>

        <div className="visual__container visual__container--price">
          <div className="visual__container-price--section colors">
            <p className="visual__container-price--text">Available colors</p>
            <div className="colors__container">
              {availableColors.map((color) => (
                <button
                  type="button"
                  className={cn(`colors__color colors__${color}`)}
                  key={color}
                >
                  <div className={cn(`colors__fill-${color}`)}></div>
                </button>
              ))}
            </div>
          </div>

          <div className="visual__container-price--section capacities">
            <p className="visual__container-price--text">Select capacity</p>
            <div className="capacities__container">
              {availableCapacities.map((capacity) => (
                <button
                  type="button"
                  className="capacities__capacity"
                  key={capacity}
                >
                  {capacity} GB
                </button>
              ))}
            </div>
          </div>

          <div className="visual__container-price--section price-info">
            <div className="price-info__price">
              <p className="price-info__price-new">${priceDiscount}</p>

              <p className="price-info__price-old">${priceRegular}</p>
            </div>

            <div className="price-info__buttons">
              <a href="#AddToCart" className="price-info__buttons-addCart">
                Add to cart
              </a>
              <a href="#AddToList" className="price-info__buttons-addList"></a>
            </div>

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

      {/* <div className="info__section about">
        <div className="info-text__section info-text__section--about">
          333
        </div>
        <div className="info-text__section info-text__section--specs">
          444
        </div>
      </div> */}
    </div>
  );
};
