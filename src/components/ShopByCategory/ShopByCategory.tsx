import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getCategories, getCount, getImage } from '../../api/api';
import { Category } from '../../types/Category';
import { Loader } from '../Loader';
import './ShopByCategory.scss';

export const ShopByCategory: React.FC = () => {
  const [categories, setCategoties] = useState([]);
  const [allImages, setAllImages] = useState<string[] | []>([]);
  const [isDataLoading, setIsDataLoading] = useState(false);
  const [isError, setError] = useState(false);
  // const [countOfModels, setCountModels] = useState<number []>([]);
  const countOfModels = [71, 0, 0];

  const getCategoriesFromServer = async () => {
    try {
      setIsDataLoading(true);
      const data = await getCategories();
      setCategoties(data);
      setIsDataLoading(false);
    } catch {
      setError(true);
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    getCategoriesFromServer();
  }, []);

  const getAllImages = async () => {
    try {
      setIsDataLoading(true);
      const data = await Promise.all(
        categories.map((category: Category) => getImage(category.image)),
      );

      setAllImages(data);
      setIsDataLoading(false);
    } catch {
      setError(true);
    } finally {
      setIsDataLoading(false);
    }
  };

  useEffect(() => {
    getAllImages();
  }, [categories]);

  // const getCountFromServer = async () => {
  //   try {
  //     const data = await Promise.all(categories.map((category: Category) => getCount(category.name)));
  //     const counts = data.map(item => item.count);
  //     console.log(counts);
  //     setCountModels(counts);
  //   } catch {
  //     setCountModels([]);
  //   }
  // };

  // useEffect(() => {
  //   getCountFromServer();
  // }, [categories]);

  return (
    <div className="shop">
      <h1 className="shop__title">Shop by category</h1>
      {isDataLoading && <Loader />}

      {!isDataLoading && !isError && (
        <div className="shop__container">
          {categories.map((category: Category, i) => {
            const { id, name } = category;
            const nameFixed =
              name.slice(0, 1).toLocaleUpperCase() + name.slice(1);

            return (
              <Link
                to={`/${name}`}
                className="shop__category category"
                key={id}
              >
                <div className="category__image-container">
                  <img src={allImages[i]} alt="" className="category__image" />
                </div>
                <h3 className="category__title">{nameFixed}</h3>
                <p className="category__count">{countOfModels[i]}</p>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};
