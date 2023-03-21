import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../../utils/searchParamsHelper';
import './Pagination.scss';
import cn from 'classnames';

type Props = {
  countOfModels: number;
};

export const Pagination: React.FC<Props> = ({ countOfModels }) => {
  const [countAllPages, setCountAllPages] = useState(countOfModels);

  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  const [pages, setPages] = useState<number[]>([]);

  const [isNextAvailible, setIsNextAvailible] = useState(false);
  const [isPrevAvailible, setIsPrevAvailible] = useState(false);
  const [currentPerPage, setCurrentPerPage] = useState(16);

  const getCountOfPages = () => {
    const perPage = searchParams.get('perPage') || 16;
    const countPages = Math.ceil(countOfModels / +perPage);

    setCountAllPages(countPages);
    return countPages;
  };

  const getInitialCountOfPages = (countAll: number) => {
    const allAvailablePages = [];

    for (let i = 1; i <= countAll; i++) {
      allAvailablePages.push(i);
    }

    return allAvailablePages;
  };

  const getInitialPages = () => {
    const countOfAllPages = getCountOfPages();
    const allPages = getInitialCountOfPages(countOfAllPages);
    let pageInSearchParams = searchParams.get('currentPage') || 1;
    const perPage = searchParams.get('perPage') || 16;

    if (currentPerPage !== +perPage) {
      pageInSearchParams = 1;
      onPageHandler(1);
      setCurrentPerPage(+perPage);
    }

    getCurrentPages(+pageInSearchParams, allPages, countOfAllPages);
  };

  const getCurrentPages = (
    page: number,
    allInitialPages: number[],
    countOfAllPages: number,
  ) => {
    let end = page;

    while (end % 5 !== 0) {
      end++;
    }
    const currentPages = [...allInitialPages].slice(end - 5, end);

    if (currentPages[currentPages.length - 1] < countOfAllPages) {
      setIsNextAvailible(true);
    } else {
      setIsNextAvailible(false);
    }

    if (currentPages[0] > 5) {
      setIsPrevAvailible(true);
    } else {
      setIsPrevAvailible(false);
    }
    setCurrentPage(page);
    setPages(currentPages);
  };

  useEffect(() => {
    getInitialPages();
  }, [searchParams]);

  const onPageHandler = (pageNumber: number) => {
    const updatedSearchParams = getSearchWith(searchParams, {
      currentPage: pageNumber.toString() || null,
    });

    setSearchParams(updatedSearchParams);
    setCurrentPage(pageNumber);
  };

  return (
    <div className="pagination pagination__container">
      <button
        className={cn('pagination__arrow', {
          'pagination__arrow--disabled': currentPage === 1,
        })}
        onClick={() => onPageHandler(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <svg
          className="pagination__forward-svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.4715 3.52861C10.2111 3.26826 9.78903 3.26826 9.52868 3.52861L5.52868 7.52861C5.26833 7.78896 5.26833 8.21107 5.52868 8.47141L9.52868 12.4714C9.78903 12.7318 10.2111 12.7318 10.4715 12.4714C10.7318 12.2111 10.7318 11.789 10.4715 11.5286L6.94289 8.00001L10.4715 4.47141C10.7318 4.21107 10.7318 3.78896 10.4715 3.52861Z"
          />
        </svg>
      </button>

      {isPrevAvailible && (
        <div
          className={cn('pagination__item')}
          onClick={() => onPageHandler(pages[0] - 1)}
        >
          ...
        </div>
      )}

      <div className="pagination__items">
        {pages.map((page) => (
          <div
            key={page}
            className={cn('pagination__item', {
              'pagination__item--selected': page === currentPage,
            })}
            onClick={() => onPageHandler(page)}
          >
            {page}
          </div>
        ))}
      </div>

      {isNextAvailible && (
        <div
          className={cn('pagination__item')}
          onClick={() => onPageHandler(pages[pages.length - 1] + 1)}
        >
          ...
        </div>
      )}

      <button
        className={cn('pagination__arrow', {
          'pagination__arrow--disabled': currentPage >= countAllPages,
        })}
        onClick={() => onPageHandler(currentPage + 1)}
        disabled={currentPage >= countAllPages}
      >
        <svg
          className="pagination__forward-svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5.52876 3.52861C5.78911 3.26826 6.21122 3.26826 6.47157 3.52861L10.4716 7.52861C10.7319 7.78896 10.7319 8.21107 10.4716 8.47141L6.47157 12.4714C6.21122 12.7318 5.78911 12.7318 5.52876 12.4714C5.26841 12.2111 5.26841 11.789 5.52876 11.5286L9.05735 8.00001L5.52876 4.47141C5.26841 4.21107 5.26841 3.78896 5.52876 3.52861Z"
          />
        </svg>
      </button>
    </div>
  );
};
