// src/App.jsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// ----------------------------------------------------
// Componentes y Páginas
// ----------------------------------------------------
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import ProductDetail from './pages/ProductDetail/ProductDetail.jsx';
import UnderConstructionPage from './pages/UnderConstructionPage/UnderConstructionPage.jsx';
import CartPage from './pages/CartPage/CartPage.jsx';

// ----------------------------------------------------
// Importaciones de Estilos CSS Globales/Componente
// ----------------------------------------------------
import './assets/styles/globals.css';
import './components/Header/Header.css';
import './components/Footer/Footer.css';
import './pages/HomePage/HomePage.css';
import './pages/ProductDetail/ProductDetail.css';
import './pages/CartPage/CartPage.css';
import './components/CartList/CartList.css';
import './components/CartItem/CartItem.css';

function App() {
  return (
    <Router>
      <Routes>

        {/*Ruta para la página "En Construcción".*/}
        <Route path="/en-construccion" element={<UnderConstructionPage />} />

        {/*Ruta comodín que engloba a las demás páginas principales.*/}
        <Route
          path="/*"
          element={
            <>
              <Header />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetail />} />
                <Route path="/cart" element={<CartPage />} />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;