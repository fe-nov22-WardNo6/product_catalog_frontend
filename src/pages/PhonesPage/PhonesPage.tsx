import React from 'react';
import './PhonesPage.scss';
import '../../style/App.scss';
import '../../style/grid.scss';
import { Card } from '../../components/Card';

export const PhonesPage: React.FC = () => {
  return (
    <div className="phonesPage container">
      <p className="text">page navigation</p>
      <h1 className="phonesPage__title">Mobile phones</h1>
      <p className="phonesPage__countPhones">95 models</p>
      <div className="phonesPage__displayOptions">
        component with form
      </div>
      <div className="phonesPage__phones-container grid grid--desktop">
        <Card cardClass="grid__item-desktop--1-6"/>
        <Card cardClass="grid__item-desktop--7-12"/>
        <Card cardClass="grid__item-desktop--13-18"/>
        <Card cardClass="grid__item-desktop--19-24"/>
        <Card cardClass="grid__item-desktop--1-6"/>
        <Card cardClass="grid__item-desktop--7-12"/>
        <Card cardClass="grid__item-desktop--13-18"/>
        <Card cardClass="grid__item-desktop--19-24"/>
      </div>
    </div>
  );
};
