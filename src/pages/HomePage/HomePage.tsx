import React, { useState, useEffect } from 'react';
import { BannerSlider } from '../../components/BannerSlider/BannerSlider';
import { Roundabout } from '../../components/Roundabout/Roundabout';
import { Phone } from '../../types/PhoneDefault';
import { getCollection } from '../../api/api';
import { ShopByCategory } from '../../components/ShopByCategory';
import './HomePage.scss';
import '../../style/App.scss';

export const HomePage: React.FC = () => {
  const [phonesNew, setPhonesNew] = useState<Phone[]>([]);
  const [phonesHot, setPhonesHot] = useState<Phone[]>([]);

  const getNewFromServer = async (collection: string) => {
    try {
      const data = await getCollection(collection);
      setPhonesNew(data);
    } catch {
      console.log(123);
    }
  };

  const getHotFromServer = async (collection: string) => {
    try {
      const data = await getCollection(collection);
      setPhonesHot(data);
    } catch {
      console.log(123);
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
