import React from 'react';
import { Phone } from '../../types/PhoneDefault';
import './AboutPhone.scss';

type Props = {
  phone: Phone;
};

export const AboutPhone: React.FC<Props> = ({ phone }) => {
  const {
    description,
    screen,
    resolution,
    capacity,
    ram,
    processor,
    camera,
    zoom,
    cell,
  } = phone;

  return (
    <div className="info__section about">
      <div className="about__container about__container--details details">
        <h3 className="about__container--title">About</h3>

        {description.map((item) => {
          const { title, text } = item;
          return (
            <div className="details__container" key={title}>
              <h4 className="details__title">{title}</h4>

              {text.map((paragraph) => (
                <p className="details__text" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          );
        })}
      </div>

      <div className="about__container about__container--specs specs">
        <h3 className="about__container--title">Tech specs</h3>
        <div className="specs__char">
          <p className="specs__char-text">Screen</p>

          <p className="specs__char-number">{screen}</p>
        </div>

        <div className="specs__char">
          <p className="specs__char-text">Resolution</p>

          <p className="specs__char-number">{resolution}</p>
        </div>

        <div className="specs__char">
          <p className="specs__char-text">Processor</p>

          <p className="specs__char-number">{processor}</p>
        </div>

        <div className="specs__char">
          <p className="specs__char-text">RAM</p>

          <p className="specs__char-number">{ram}</p>
        </div>

        <div className="specs__char">
          <p className="specs__char-text">Built in memory</p>

          <p className="specs__char-number">{capacity}</p>
        </div>

        <div className="specs__char">
          <p className="specs__char-text">Camera</p>

          <p className="specs__char-number">{camera}</p>
        </div>

        <div className="specs__char">
          <p className="specs__char-text">Zoom</p>

          <p className="specs__char-number">{zoom}</p>
        </div>

        <div className="specs__char">
          <p className="specs__char-text">Cell</p>
          <p className="specs__char-number">{cell.join(', ')}</p>
        </div>
      </div>
    </div>
  );
};
