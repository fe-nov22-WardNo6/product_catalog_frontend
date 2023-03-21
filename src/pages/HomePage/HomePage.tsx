import React from 'react';
import { BannerSlider } from '../../components/BannerSlider/BannerSlider';
import './HomePage.scss';
import '../../style/App.scss';

export const HomePage: React.FC = () => {
  return (
    <div className='homePage container'>
      <h1 className='title'>Welcome to Nice Gadgets store!</h1>
      <BannerSlider />
    </div>
  );
};
