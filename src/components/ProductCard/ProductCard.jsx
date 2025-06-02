// src/components/ProductCard/ProductCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

/**
 * Componente ProductCard.
 * Representa una tarjeta de producto individual con información básica y un enlace a su detalle.
 *
 * @param {object} props - Propiedades del componente.
 * @param {string} props.productId - ID único del producto para construir el enlace de detalle.
 * @param {string} props.imageUrl - URL de la imagen del producto.
 * @param {string} [props.oldPrice] - Precio anterior del producto.
 * @param {string} props.newPrice - Precio actual del producto.
 * @param {string} [props.discount] - Texto del descuento.
 * @param {string} props.name - Nombre del producto.
 * @param {string} props.description - Breve descripción del producto.
 */
function ProductCard({ productId, imageUrl, oldPrice, newPrice, discount, name, description }) {
  return (
    <article className="product-card">

      {/* El enlace principal de la tarjeta al detalle del producto */}
      <Link to={`/product/${productId}`} className="product-card__link">
        <img src={imageUrl} alt={`Producto: ${name}`} />
        <div className="product-card__info">
          <p className="product-card__price">
            {oldPrice && <span className="product-card__old-price">{oldPrice}</span>}
            <span className="product-card__new-price">{newPrice}</span>
            {discount && <span className="product-card__discount">{discount}</span>}
          </p>
          <div className="product-card__header">
            <h4 className="product-card__name">{name}</h4>

            {/* Botón de añadir al carrito (actualmente dentro del Link, considerar sacarlo) */}
            <button className="product-card__cart">
              <img src="/src/assets/img/icon-cart-outline-b.svg" alt="Agregar al carrito" />
            </button>
          </div>
          <p className="product-card__desc">{description}</p>
        </div>
      </Link>
    </article>
  );
}

export default ProductCard;