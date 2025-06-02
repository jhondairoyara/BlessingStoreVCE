// src/pages/HomePage.jsx

import React from 'react';
import './HomePage.css';
import ProductCarousel from '../../components/ProductCarousel/ProductCarousel.jsx';

function HomePage() {
  return (
    <main className="main-home">
      <section className="main__hero">
        <span className="line"></span>
        <h2>
          Descubre tu estilo con un <br />
          toque de bendición
        </h2>
        <span className="line"></span>
      </section>

      {/* Botones principales */}
      <section className="main__hero-buttons">
        <a href="#" className="main__btn main__btn--yellow">
          <strong>Ofertas especiales</strong>
          <span>¡COMPRA AHORA!</span>
        </a>
        <a href="#" className="main__btn main__btn--dark">
          <strong>Novedades</strong>
          <span>VER COLECCIÓN</span>
        </a>
      </section>

      {/* Sección - Más vendidos */}
      <ProductCarousel title="Más vendidos" />

      {/* Sección - La nueva moda */}
      <ProductCarousel title="La nueva moda" /> 

    </main>
  );
}

export default HomePage;