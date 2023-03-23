import React, { useEffect, useState } from 'react';
import './PhonesPage.scss';
import '../../style/App.scss';
import '../../style/grid.scss';
import { Card } from '../../components/Card';
import { Phone } from '../../types/PhoneDefault';
import { getCount, getPhones } from '../../api/api';
import { getGridClass } from '../../utils/getGridClass';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { CounterItems } from '../../components/CounterItems';
import { Pagination } from '../../components/Pagination';
import { useSearchParams } from 'react-router-dom';
import { SortPanel } from '../../components/SortPanel';
import { Loader } from '../../components/Loader';
import { PageNotFound } from '../PageNotFound';
import { SearchPanel } from '../../components/SearchPanel';

export const PhonesPage: React.FC = () => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setError] = useState(false);
  const [width, setWidth] = useState(window.screen.width);
  const [countOfModels, setCountModels] = useState(0);
  const [searchParams] = useSearchParams();
  const [currentCountOfPhones, setCurrentCountOfPhones] = useState(0);

  useEffect(() => {
    const resizeHandler = () => {
      setWidth(window.screen.width);
    };

    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  const getCountFromServer = async () => {
    try {
      const data = await getCount('phones');

      const countFromServer = data.count;
      setCountModels(countFromServer);
    } catch {
      setCountModels(0);
    }
  };

  const getPhonesFromServer = async () => {
    try {
      setIsDataLoading(true);
      const data = await getPhones(searchParams.toString());
      console.log(data);
      setPhones(data.rows);
      setCurrentCountOfPhones(data.count);
      setIsDataLoading(false);
    } catch {
      setError(true);
      setIsDataLoading(false);
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    getCountFromServer();
  }, []);

  useEffect(() => {
    getPhonesFromServer();
  }, [searchParams]);

  return (
    <div className="phonesPage container">
      <BreadCrumbs />
      <h1 className="phones-page__title">Mobile phones</h1>
      <div className="phones-page__counterItem-container">
        <CounterItems countOfModels={countOfModels} text="models" />
      </div>
      <div className="phones-page__sort-wrapper">
        <SortPanel />
        <SearchPanel />
      </div>
      {isDataLoading && <Loader />}
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
      {isError && <PageNotFound />}
      {currentCountOfPhones === 0 && !isDataLoading && (
        <h3 className="phones-page__noPhones">
          Phones not found, we are sorry...
        </h3>
      )}
      {!!countOfModels && !(currentCountOfPhones === 0) && (
        <Pagination countOfModels={currentCountOfPhones} />
      )}
    </div>
  );
};
