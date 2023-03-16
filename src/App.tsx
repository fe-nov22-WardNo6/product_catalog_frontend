import React from 'react';
import './style/App.scss';
import { Routes, Route } from 'react-router-dom';
import { PhonesPage } from './pages/PhonesPage';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { TabletPage } from './pages/TabletPage';
import { AccessoriesPage } from './pages/AccessoriesPage';

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

          {/* <Route
          path="/phones/:productId"
          element={<ProductDetailsPage />} /> */}
          {/* <Route path="/tablets" element={<TabletsPage />} /> */}
          {/* <Route
            path="/tablets/:productId"
            element={<ProductDetailsPage />}
          /> */}
          {/* <Route path="/accessories" element={<AccessoriesPage />} /> */}
          {/* <Route path="/cart" element={<CartPage />} /> */}
          {/* <Route path="/favorites" element={<FavoritesPage />} /> */}
        </Routes>
      </main>
      <Footer />
    </div>
  );
};
