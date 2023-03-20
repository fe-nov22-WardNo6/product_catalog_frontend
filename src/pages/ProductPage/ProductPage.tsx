import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getOnePhone } from '../../api/api';
import { Phone } from '../../types/PhoneDefault';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { PhoneDescription } from '../../components/PhoneDescription';
import arrow from '../../icons/arrowLeft.svg';
import './ProductPage.scss';
import { AboutPhone } from '../../components/AboutPhone';

export const ItemCard: React.FC = () => {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setError] = useState(false);
  const { phoneId = '' } = useParams();

  const getOnePhoneFromServer = async (phoneId: string) => {
    try {
      setIsDataLoading(true);
      const data = await getOnePhone(phoneId);
      setPhone(data);
    } catch {
      setError(true);
      setIsDataLoading(false);
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    getOnePhoneFromServer(phoneId);
  }, [phoneId]);


  return (
    <div className="item-card container">
      <BreadCrumbs />
      <Link to="/phones" className="item-card__back">
        <img src={arrow} alt="Page phone" className="item-card__arrow-back" />
        <p className="item-card__back-text">Back</p>
      </Link>
      {isDataLoading && 'loading data'}
      {phone && !isError && (
        <>
          <PhoneDescription phone={phone} />
          <AboutPhone phone={phone} />
        </>
      )},
      {isError && 'not found'}
    </div>
  );
};
