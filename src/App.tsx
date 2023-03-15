import React from 'react';
import './App.scss';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <main>
        {/* <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/phones" element={<PhonesPage />} />
          <Route path="/phones/:productId" element={<ProductDetailsPage />} />
          <Route path="/tablets" element={<TabletsPage />} />
          <Route
            path="/tablets/:productId"
            element={<ProductDetailsPage />}
          />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/favorites" element={<FavoritesPage />} />
        </Routes> */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
