import React from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs';

export const AccessoriesPage: React.FC = () => {
  return (
    <div className="container">
      <BreadCrumbs />
      <h1 style={{ color: 'white', height: '100vh' }}>Accessories Page</h1>
      <img
        style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
        src="https://www.whothoughtofit.com/wp-content/uploads/2022/03/Under-Construction-Who-Invented-the-GIF.gif"
        alt="under construction"
      />
    </div>
  );
};
