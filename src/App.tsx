import React from 'react';
import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import { PhonesPage } from './pages/PhonesPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { TabletPage } from './pages/TabletPage';
import { AccessoriesPage } from './pages/AccessoriesPage';
import { Cart } from './components/Cart';
import { ItemCard } from './components/ItemCard';

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="*" element={<p>Page not found</p>} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="/tablets" element={<TabletPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/phones/:phoneId"
            element={<ItemCard />} />
          {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
};
