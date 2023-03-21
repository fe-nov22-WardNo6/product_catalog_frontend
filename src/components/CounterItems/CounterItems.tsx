import React from 'react';
import './counterItems.scss';

type Props = {
  countOfModels: number;
  text: string;
};

export const CounterItems: React.FC<Props> = ({ countOfModels, text }) => {
  return <p className="counterItmes">{`${countOfModels} ${text}`}</p>;
};
