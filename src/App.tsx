import React, { useState } from 'react';
import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import { PhonesPage } from './pages/PhonesPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { TabletPage } from './pages/TabletPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { Cart } from './components/Cart';
import { Burger } from './components/Burger';
import { ItemCard } from './pages/ProductPage';
import { PageNotFound } from './pages/PageNotFound';
import { FavoritesPage } from './pages/FavoritesPage/FavoritesPage';
import { Contacts } from './components/Contacts';
import { Rights } from './pages/Rights';

export const App: React.FC = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false);

  return (
    <div className="App">
      <Header
        setIsBurgerActive={setIsBurgerActive}
        isBurgerActive={isBurgerActive}
      />
      {isBurgerActive ? (
        <Burger setIsBurgerActive={setIsBurgerActive} />
      ) : (
        <>
          <main>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="*" element={<PageNotFound />} />
              <Route path="/phones" element={<PhonesPage />} />
              <Route path="/tablets" element={<TabletPage />} />
              <Route path="/accessories" element={<AccessoriesPage />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/phones/:phoneId" element={<ItemCard />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/rights" element={<Rights />} />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};
