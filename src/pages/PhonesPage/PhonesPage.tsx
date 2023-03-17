import React, { useEffect, useState } from 'react';
import './PhonesPage.scss';
import '../../style/App.scss';
import '../../style/grid.scss';
import { Card } from '../../components/Card';
import { Phone } from '../../types/PhoneDefault';
import { getPhones } from '../../api/api';
import { getGridClass } from '../../utils/getGridClass';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [width, setWidth] = useState(window.screen.width);

  useEffect(() => {
    const resizeHandler = () => {
      setWidth(window.screen.width);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

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
      {/* <p className="text">page navigation</p>
      <h1 className="phones-page__title">Mobile phones</h1>
      <p className="phones-page__countPhones">95 models</p>
      <div className="phones-page__displayOptions">component with form</div> */}
      {isDataLoading && 'loading data'}
      {!isDataLoading && !isError && (
        <div className="phones-page__phones-container grid grid--desktop grid--tablet grid--landscape">
          {phones.map((phone, i) => {
            const gridClass = getGridClass(width, i);

            return (
              <Card key={phone.phoneId} phone={phone} gridClass={gridClass} />
            );
          })}
        </div>
      )}
      {isError && 'not found'}
    </div>
  );
};
