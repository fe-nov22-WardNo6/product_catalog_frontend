import React from 'react';
import './counterItems.scss';

type Props = {
  countOfModels: number;
};

export const CounterItems: React.FC<Props> = ({ countOfModels }) => {
  return <p className="counterItmes">{`${countOfModels} models`}</p>;
};
