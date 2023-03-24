import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './BannerSlider.scss';

import slider_1_desc from './banner-1-desktop.png';
import slider_1_mob from './banner-1-mobile.png';
import slider_2_desc from './banner-2-desktop.png';
import slider_2_mob from './banner-2-mobile.png';
import slider_3_desc from './banner-3-desktop.png';
import slider_3_mob from './banner-3-mobile.png';


type Props = {
  className: string;
  onClick?: React.MouseEventHandler<HTMLElement>;
};

function Arrow(props: Props): JSX.Element {
  const { className, onClick } = props;

  return <div className={className} onClick={onClick} />;
}

export const BannerSlider: React.FC = () => {
  const settings = {
    dots: true,
    dotsClass: 'slick-dots',
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    draggable: true,
    autoplaySpeed: 3000,
    prevArrow: <Arrow className="slick-prev slick-arrow" />,
    nextArrow: <Arrow className="slick-next slick-arrow" />,
  };
  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="slick-slide">
          <Link to="/phones">
            <img id='slick-slide__img-desk' src={slider_1_desc}/>
            <img id='slick-slide__img-mob' src={slider_1_mob}/>
          </Link>
        </div>
        <div className="slick-slide">
          <Link to="/phones?searchQuery=iphone+11">
            <img id='slick-slide__img-desk' src={slider_2_desc}/>
            <img id='slick-slide__img-mob' src={slider_2_mob}/>
          </Link>
        </div>
        <div className="slick-slide">
          <Link to="/phones/apple-iphone-11-pro-max-512gb-spacegray">
            <img id='slick-slide__img-desk' src={slider_3_desc}/>
            <img id='slick-slide__img-mob' src={slider_3_mob}/>
          </Link>
        </div>
      </Slider>
    </div>
  );
};
