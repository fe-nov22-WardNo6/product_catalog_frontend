import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getOnePhone } from '../../api/api';
import { Phone } from '../../types/PhoneDefault';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { PhoneDescription } from '../../components/PhoneDescription';
import './ProductPage.scss';
import { AboutPhone } from '../../components/AboutPhone';
import { Roundabout } from '../../components/Roundabout/Roundabout';
import { getCollection } from '../../api/api';
import { Back } from '../../components/Back';

export const ItemCard: React.FC = () => {
  const [phone, setPhone] = useState<Phone | null>(null);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setError] = useState(false);
  const { phoneId = '' } = useParams();
  const [phonesRecommended, setPhonesRecommended] = useState<Phone[]>([]);

  const getRecommendedFromServer = async (collection: string) => {
    try {
      const data = await getCollection(collection);
      setPhonesRecommended(data);
    } catch {
      console.log(123);
    }
  };

  useEffect(() => {
    getRecommendedFromServer('recommended');
  }, []);

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
      <div className='item-back'>
        <Back />
      </div>
      {isDataLoading && 'loading data'}
      {phone && !isError && (
        <>
          <PhoneDescription phone={phone} />
          <AboutPhone phone={phone} />
        </>
      )}
      ,{isError && 'not found'}
      <Roundabout title="You may also like" phones={phonesRecommended} />
    </div>
  );
};
