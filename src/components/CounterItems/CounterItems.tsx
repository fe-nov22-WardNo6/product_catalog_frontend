import React, { useContext, useEffect } from 'react';
import { getCount } from '../../api/api';
import './counterItems.scss';
import { ActionContext } from '../../context/ActionContext';

export const CounterItems: React.FC = () => {
  const { countOfModels, setCountModels } = useContext(ActionContext);

  const getCountFromServer = async () => {
    try {
      const data = await getCount('phones');
      const countFromServer = data.count;
      setCountModels(countFromServer);
    } catch {
      setCountModels(0);
    }
  };

  useEffect(() => {
    getCountFromServer();
  }, []);

  return <p className="counterItmes">{`${countOfModels} models`}</p>;
};
