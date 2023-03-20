import React, { createContext, useState, useMemo } from 'react';
import { Phone } from '../../types/PhoneDefault';

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  cartItems: Phone[],
  addToCart: (phone: Phone) => void,
  removeFromCart: (phone: Phone) => void;
};

export const ActionContext = createContext<ContextType>({
  cartItems: [],
  addToCart: () => null,
  removeFromCart: () => null,
});

export const ActionProvider: React.FC<Props> = ({ children }) => {
  const [cartItems, setCartItems] = useLocalStorage<Phone[]>('cart', []);


  function useLocalStorage<T>(key: string, initialValue: T) {
    const [storedValue, setStoredValue] = useState<T>(() => {
      if (typeof window === 'undefined') {
        return initialValue;
      }
      try {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    });
    const setValue = (value: T | ((val: T) => T)) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        if (typeof window !== 'undefined') {
          window.localStorage.setItem(key, JSON.stringify(valueToStore));
        }
      } catch (error) {
        console.log(error);
      }
    };
    return [storedValue, setValue] as const;
  }

  const addToCart = (phone: Phone) => {
    setCartItems(currentItems => {
      let cartItem = currentItems.find(({ id }) => id === phone.id);

      if (!cartItem) {
        cartItem = { ...phone, count: 1 };

        return [...currentItems, cartItem];
      }

      cartItem.count++;

      return [...currentItems];
    });
  };

  // const addToCart = (phone: Phone) => {
  //   setcartItems(prevState => {
  //     prevState.push(phone);
  //     return prevState;
  //   });
  // };

  const removeFromCart = (phone: Phone) => {
    setCartItems(currentItems => {
      const cartItem = currentItems.find(({ id }) => id === phone.id);

      if (!cartItem) {
        return [...currentItems];
      }

      cartItem.count--;

      if (cartItem.count <= 0) {
        return currentItems.filter(({ id }) => id !== phone.id);
      }

      return [...currentItems];
    });
  };

  // const removeFromCart = (phone: Phone) => {
  //   const filteredCart = cartItems?.filter(el => el.id !== phone.id);
  //   setCartItems(filteredCart);
  // };

  // const removeOne = (productId: number): void => {
  //   setCartItems(currentItems => {
  //     const cartItem = currentItems.find(({ id }) => id === productId);

  //     if (!cartItem) {
  //       return [...currentItems];
  //     }

  //     cartItem.count--;

  //     if (cartItem.count <= 0) {
  //       return currentItems.filter(({ id }) => id !== productId);
  //     }

  //     return [...currentItems];
  //   });
  // };

  const contextValue = useMemo(()=> (
    { cartItems, addToCart, removeFromCart }
  ), [cartItems]);

  return (
    <ActionContext.Provider value={contextValue}>
      {children}
    </ActionContext.Provider>
  );
};

//To use in component context:
//import { ActionContext } from '../ActionContext';
//const { addPhoneToCart } = useContext(ActionContext);
