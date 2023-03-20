import React, { createContext, useCallback, useState } from 'react';
import { Phone } from '../../types/PhoneDefault';

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  addedToBuyPhones: Phone[];
  addPhoneToCart: (phone: Phone) => void;
  deletePhoneFromCart: (id: string) => void;
  countOfModels: number;
  setCountModels: (count: number) => void;
};

export const ActionContext = createContext<ContextType>({
  addedToBuyPhones: [],
  addPhoneToCart: () => null,
  deletePhoneFromCart: () => null,
  countOfModels: 0,
  setCountModels: () => null,
});

export const ActionProvider: React.FC<Props> = ({ children }) => {
  const [addedToBuyPhones, setAddedToBuyPhones] = useState<Phone[]>([]);
  const [countOfModels, setCountOfModels] = useState(0);

  const addPhoneToCart = useCallback((phone: Phone) => {
    setAddedToBuyPhones((currentPhones) => [...currentPhones, phone]);
  }, []);

  const deletePhoneFromCart = useCallback((id: string) => {
    setAddedToBuyPhones((currentPhones) =>
      currentPhones.filter((phone) => phone.id !== id),
    );
  }, []);

  const setCountModels = (count: number) => {
    setCountOfModels(count);
  };

  const contextValue = {
    addedToBuyPhones,
    addPhoneToCart,
    deletePhoneFromCart,
    countOfModels,
    setCountModels,
  };

  return (
    <ActionContext.Provider value={contextValue}>
      {children}
    </ActionContext.Provider>
  );
};
//To use in component context:
//import { ActionContext } from '../ActionContext';
//const { addPhoneToCart } = useContext(ActionContext);
