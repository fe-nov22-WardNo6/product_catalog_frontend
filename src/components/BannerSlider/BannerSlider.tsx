import React from 'react';
import Slider from 'react-slick';

import './BannerSlider.scss';

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
    <div className="corousel">
      <Slider {...settings}>
        <div className="slick-slide"></div>
        <div className="slick-slide"></div>
        <div className="slick-slide"></div>
      </Slider>
    </div>
  );
};
