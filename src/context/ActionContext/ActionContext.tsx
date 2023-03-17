import React, { createContext, useCallback, useState } from 'react';
import { Phone } from '../../types/PhoneDefault';

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  addedToBuyPhones: Phone[];
  addPhoneToCart: (phone: Phone) => void;
};

export const ActionContext = createContext<ContextType>({
  addedToBuyPhones: [],
  addPhoneToCart: () => null,
});

export const ActionProvider: React.FC<Props> = ({ children }) => {
  const [addedToBuyPhones, setAddedToBuyPhones] = useState<Phone[]>([]);

  const addPhoneToCart = useCallback((phone: Phone) => {
    setAddedToBuyPhones((currentPhones) => [...currentPhones, phone]);
  }, []);

  const contextValue = {
    addedToBuyPhones,
    addPhoneToCart,
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
