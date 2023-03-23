import React, { useCallback, useState } from 'react';
import { debounce } from 'lodash';
import './SearchPanel.scss';
import { useSearchParams } from 'react-router-dom';
import { getSearchWith } from '../utils/searchParamsHelper';

export const SearchPanel: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState('');

  const onQueryHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const updateSearchParams = getSearchWith(searchParams, {
      searchQuery: event.target.value || null,
      currentPage: '1',
      perPage: searchParams.get('perPage'),
    });

    setSearchParams(updateSearchParams);
  };

  const inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const applyQuery = useCallback(debounce(onQueryHandler, 1000), []);

  return (
    <div className="search">
      <p className="search__title">Search</p>
      <input
        className="search__input"
        type="search"
        placeholder="look for..."
        onChange={(event) => {
          applyQuery(event);
          inputHandler(event);
        }}
        value={query}
      />
    </div>
  );
};
