import React, { useContext, useEffect, useState } from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import { Card } from '../../components/Card';
import { ActionContext } from '../../context/ActionContext';
import '../../style/App.scss';
import { getGridClass } from '../../utils/getGridClass';
import './FavoritesPage.scss';


export const FavoritesPage: React.FC = () => {
  const { favoritesItems } = useContext(ActionContext);
  const totalItems = favoritesItems.length;
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

  return (
    <div className='favorites container'>
      <BreadCrumbs />
      <h1 className='favorites__title'>Favorites Page</h1>
      <p className='favorites__total-count'>
        {totalItems}
        <span className='favorites__total-count__text'>
          items
        </span>
      </p>
      <div className='grid grid--desktop grid--tablet grid--landscape'>
        {favoritesItems.map(((phone, i) => {
          const gridClass = getGridClass(width, i);

          return (
            <Card key={phone.phoneId} phone={phone} gridClass={gridClass} />
          );
        }))}
      </div>

    </div>
  );
};
