import React, { createContext, useCallback, useState } from 'react';
import { Phone } from '../../types/PhoneDefault';

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  addedToBuyPhones: Phone[];
  addPhoneToCart: (phone: Phone) => void;
  deletePhoneFromCart: (id: string) => void;
};

export const ActionContext = createContext<ContextType>({
  addedToBuyPhones: [],
  addPhoneToCart: () => null,
  deletePhoneFromCart: () => null,
});

export const ActionProvider: React.FC<Props> = ({ children }) => {
  const [addedToBuyPhones, setAddedToBuyPhones] = useState<Phone[]>([]);

  const addPhoneToCart = useCallback((phone: Phone) => {
    setAddedToBuyPhones((currentPhones) => [...currentPhones, phone]);
  }, []);

  const deletePhoneFromCart = useCallback((id: string) => {
    setAddedToBuyPhones((currentPhones) =>
      currentPhones.filter((phone) => phone.id !== id),
    );
  }, []);

  const contextValue = {
    addedToBuyPhones,
    addPhoneToCart,
    deletePhoneFromCart,
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
