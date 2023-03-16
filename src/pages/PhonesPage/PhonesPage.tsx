import React from 'react';
import './PhonesPage.scss';
import '../../App.scss';
import { Card } from '../../components/Card';
// import { Card } from '../../components/Card';

export const PhonesPage: React.FC = () => {
  return (
    <div className="phonesPage container">
      <p className="text">page navigation</p>
      <h1 className="phonesPage__title">Mobile phones</h1>
      <Card/>
    </div>
  );
};
