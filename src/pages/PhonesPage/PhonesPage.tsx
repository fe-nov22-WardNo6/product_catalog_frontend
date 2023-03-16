import React, { useEffect, useState } from 'react';
import './PhonesPage.scss';
import '../../style/App.scss';
import '../../style/grid.scss';
import { Card } from '../../components/Card';
import { Phone } from '../../types/PhoneDefault';
import { getPhones } from '../../api/api';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setError] = useState(false);

  const getPhonesFromServer = async () => {
    try {
      setIsDataLoading(true);
      const data = await getPhones();
      setPhones(data);
      console.log(data);
      setIsDataLoading(false);
    } catch {
      setError(true);
      setIsDataLoading(false);
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    getPhonesFromServer();
  }, []);

  return (
    <div className="phonesPage container">
      <p className="text">page navigation</p>
      <h1 className="phonesPage__title">Mobile phones</h1>

      {isDataLoading && 'loading data'}

      {!isDataLoading &&
        !isError &&
        phones.map((phone) => <Card key={phone.phoneId} phone={phone} />)}

      {isError && 'not found'}

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
