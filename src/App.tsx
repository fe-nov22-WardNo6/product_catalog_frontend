import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { PhonesPage } from './pages/PhonesPage';
import './style/App.scss';

export const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        <Routes>
          <Route path="/" element={<p>Home page</p>} />
          <Route path="*" element={<p>Page not found</p>} />
          <Route path="phones" element={<PhonesPage />} />

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
      {/* <Footer /> */}
    </div>
  );
};
