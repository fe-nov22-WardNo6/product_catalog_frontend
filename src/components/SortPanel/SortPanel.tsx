import React, { useState } from 'react';
// import { Dropdown } from '../Dropdown';
import './SortPanel.scss';
import '../../style/App.scss';
import arrowUp from '../../icons/arrowUp.svg';
import arrowDown from '../../icons/arrowDown.svg';
import cn from 'classnames';
import { getSearchWith } from '../utils/searchParamsHelper';
import { useSearchParams } from 'react-router-dom';

const sortBy = ['Expence', 'Newest', 'Chipest'];
const pages = ['4', '8', '16', '32', '48'];

type Props = {
  getPhones: (searchParams: string) => void;
};

export const SortPanel: React.FC<Props> = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [isActiveCategory, setisActiveCategory] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');
  const isSelectedCategory = Boolean(selectedCategory.length);

  const [isActivePages, setisActivePages] = useState(false);
  const [selectedPages, setSelectedPages] = useState('');
  const isSelectedPages = Boolean(selectedPages.length);

  const handleClickSortList = () => {
    setisActiveCategory(!isActiveCategory);
  };

  const handleClickPagesList = () => {
    setisActivePages(!isActivePages);
  };

  const onSortByHandler = (onSortMethood: string | null) => {
    const updateSearchParams = getSearchWith(searchParams, {
      sortBy: onSortMethood,
    });

    setSearchParams(updateSearchParams);
  };

  const onPerPageHandler = (pages: string | null) => {
    const updateSearchParams = getSearchWith(searchParams, {
      perPage: pages,
    });

    setSearchParams(updateSearchParams);
  };

  return (
    <div className="sortPanel">
      <div className="sortPanel__wrapper container">
        <div className="sortPanel__category">
          <h2 className="dropdown-title">Sort by</h2>
          <div className="dropdown">
            <div
              className={cn('dropdown__button-container', {
                'dropdown__button-container--active': isActiveCategory,
              })}
              onClick={handleClickSortList}
            >
              <div className="dropdown__button-text">
                {isSelectedCategory && selectedCategory}
                {!isSelectedCategory && 'Choose sort'}
              </div>
              <img
                className="dropdown__button__icon"
                src={isActiveCategory ? arrowUp : arrowDown}
                alt="to top"
              />
            </div>
            {isActiveCategory && (
              <div className="dropdown__content">
                {sortBy.map((sort) => {
                  return (
                    <div
                      key={sort}
                      className="dropdown__item"
                      onClick={() => {
                        onSortByHandler(sort);
                        setSelectedCategory(sort);
                        setisActiveCategory(false);
                      }}
                    >
                      {sort}
                    </div>
                  );
                })}

                <div
                  className="dropdown__item"
                  onClick={() => {
                    onSortByHandler(null);
                    setSelectedCategory('');
                    setisActiveCategory(false);
                  }}
                >
                  Reset
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="sortPanel__pages">
          <h2 className="dropdown-title">Items on page</h2>
          <div className="dropdown">
            <div
              className={cn('dropdown__button-container', {
                'dropdown__button-container--active': isActivePages,
              })}
              onClick={handleClickPagesList}
            >
              <div className="dropdown__button-text">
                {isSelectedPages && selectedPages}
                {!isSelectedPages && 'Choose items'}
              </div>
              <img
                className="dropdown__button__icon"
                src={isActivePages ? arrowUp : arrowDown}
                alt="to top"
              />
            </div>
            {isActivePages && (
              <div className="dropdown__content">
                {pages.map((page) => {
                  return (
                    <>
                      <div
                        key={page}
                        className="dropdown__item"
                        onClick={() => {
                          onPerPageHandler(page);
                          setSelectedPages(page);
                          setisActivePages(false);
                        }}
                      >
                        {page}
                      </div>
                    </>
                  );
                })}

                <div
                  className="dropdown__item"
                  onClick={() => {
                    onPerPageHandler(null);
                    setSelectedPages('');
                    setisActivePages(false);
                  }}
                >
                  Reset
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
