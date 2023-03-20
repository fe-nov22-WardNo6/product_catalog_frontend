import React from 'react';
import { BannerSlider } from '../../components/BannerSlider/BannerSlider';

export const HomePage: React.FC = () => {
  return (
    <div>
      <h1 style={{ color: 'white' }}>Homepage</h1>
      <BannerSlider />
    </div>
  );
};
