import React, { useState, useEffect } from 'react';
import { BannerSlider } from '../../components/BannerSlider/BannerSlider';
import { Roundabout } from '../../components/Roundabout/Roundabout';
import { Phone } from '../../types/PhoneDefault';
import { getCollection } from '../../api/api';
import { ShopByCategory } from '../../components/ShopByCategory';
import './HomePage.scss';
import '../../style/App.scss';
import { Loader } from '../../components/Loader';

export const HomePage: React.FC = () => {
  const [phonesNew, setPhonesNew] = useState<Phone[]>([]);
  const [phonesHot, setPhonesHot] = useState<Phone[]>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);

  const getNewFromServer = async (collection: string) => {
    try {
      setIsDataLoading(true);
      console.log('123');
      const data = await getCollection(collection);
      setPhonesNew(data);
    } catch {
      setIsDataLoading(false);
    } finally {
      setIsDataLoading(false);
    }
  };

  const getHotFromServer = async (collection: string) => {
    try {
      setIsDataLoading(true);
      const data = await getCollection(collection);
      setPhonesHot(data);
    } catch {
      setIsDataLoading(false);
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    getNewFromServer('newest');
    getHotFromServer('hotPrices');
  }, []);

  return (
    <div className="homePage">
      <h1 className="title container">Welcome to Nice Gadgets store!</h1>
      <BannerSlider />
      <div className="roundaCon container">
        <Roundabout title="Brand new models" phones={phonesNew} />
      </div>

      <ShopByCategory />

      <div className="roundaCon container">
        <Roundabout title="Hot prices" phones={phonesHot} />
      </div>
    </div>
  );
};
