// src/components/ProductCarousel/ProductCarousel.jsx

import React, { useRef } from 'react';
import './ProductCarousel.css';
import ProductCard from '../ProductCard/ProductCard.jsx';
import allProducts from '../../data/products.js';

/**
 * Componente ProductCarousel.
 * @param {object} props - Propiedades del componente.
 * @param {string} props.title - Título de la sección del carrusel.
 * @param {Array<object>} [props.products=allProducts] - Lista de productos a mostrar en el carrusel.
 */

function ProductCarousel({ title, products = allProducts }) {
  const carouselRef = useRef(null);

  /**
   * Desplaza el carrusel horizontalmente.
   * @param {number} scrollOffset - Cantidad de píxeles a desplazar.
   */
  const scroll = (scrollOffset) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += scrollOffset;
    }
  };

  return (
    <section className="products">
      <h3 className="products__title">
        {title}
      </h3>

      <div className="products__carousel">
        <button className="products__arrow-left" onClick={() => scroll(-200)}>
          <img src="/src/assets/img/icon-arrow-left.svg" alt="Flecha izquierda" />
        </button>

        <div className="products__list" ref={carouselRef}>

          {/* Renderiza ProductCard para cada producto */}
          {products.map(product => (
            <ProductCard
              key={product.id}
              productId={product.id}
              imageUrl={product.imageUrl}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              discount={product.discount}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>

        <button className="products__arrow-right" onClick={() => scroll(200)}>
          <img src="/src/assets/img/icon-arrow-right.svg" alt="Flecha derecha" />
        </button>
      </div>
    </section>
  );
}

export default ProductCarousel;