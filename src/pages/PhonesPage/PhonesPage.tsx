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
      <p className="phonesPage__countPhones">95 models</p>
      <div className="phonesPage__displayOptions">component with form</div>
      {isDataLoading && 'loading data'}
      {!isDataLoading && !isError && (
        <div className="phonesPage__phones-container grid grid--desktop">
          {phones.map((phone) => (
            <Card key={phone.phoneId} phone={phone} />
          ))}
        </div>
      )}
      {isError && 'not found'}
    </div>
  );
};
