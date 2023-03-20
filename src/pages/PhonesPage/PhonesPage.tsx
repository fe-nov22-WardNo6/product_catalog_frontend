import React, { useEffect, useState } from 'react';
import './PhonesPage.scss';
import '../../style/App.scss';
import '../../style/grid.scss';
import { Card } from '../../components/Card';
import { Phone } from '../../types/PhoneDefault';
import { getPhones } from '../../api/api';
import { SortPanel } from '../../components/SortPanel';

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
    <>
      <SortPanel
        getPhones={getPhonesFromServer}
      />
      <div className="phonesPage container">
        {/* <p className="text">page navigation</p>
    <h1 className="phones-page__title">Mobile phones</h1>
    <p className="phones-page__countPhones">95 models</p>
    <div className="phones-page__displayOptions">component with form</div> */}
        {isDataLoading && 'loading data'}
        {!isDataLoading && !isError && (
          <div className="phones-page__phones-container grid grid--desktop grid--tablet grid--landscape">
            {phones.map((phone, i) => {

              const gridClassArray = [];
              if (width > 1199) {
                if ((i + 1) % 4 === 3) {
                  gridClassArray.push('grid__item-desktop--13-18');
                }
                if ((i + 1) % 4 === 2) {
                  gridClassArray.push('grid__item-desktop--7-12');
                }
                if ((i + 1) % 4 === 1) {
                  gridClassArray.push('grid__item-desktop--1-6');
                }
                if ((i + 1) % 4 === 0) {
                  gridClassArray.push('grid__item-desktop--19-24');
                }
              }

              if (width <= 1199 && width > 768) {
                if ((i + 1) % 3 === 2) {
                  gridClassArray.push('grid__item-landscape--5-8');
                }
                if ((i + 1) % 3 === 1) {
                  gridClassArray.push('grid__item-landscape--1-4');
                }
                if ((i + 1) % 3 === 0) {
                  gridClassArray.push('grid__item-landscape--9-12');
                }
              }

              if (width <= 768 && width > 639) {
                if ((i + 1) % 2 !== 0) {
                  gridClassArray.push('grid__item-tablet--1-6');
                }
                if ((i + 1) % 2 === 0) {
                  gridClassArray.push('grid__item-tablet--7-12');
                }
              }

              const gridClass = gridClassArray.join(' ');

              return (
                <Card key={phone.phoneId} phone={phone} gridClass={gridClass} />
              );
            })}
          </div>
        )}
        {isError && 'not found'}
      </div>
    </>
  );
};
