// src/pages/ProductDetail/ProductDetail.jsx

import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import './ProductDetail.css';
import allProducts from '../../data/products';
import { useCart } from '../../context/CartContext.jsx';
import { formatCurrency, cleanAndParsePrice } from '../../utils/formatCurrency.js';

// Importa tus íconos SVG como componentes o rutas
import StarIcon from '../../assets/img/icon-star.svg';
import HeartIcon from '../../assets/img/icon-heart.svg';
import HeartFilledIcon from '../../assets/img/icon-heart-filled.svg';
import MinusIcon from '../../assets/img/icon-minus.svg';
import PlusIcon from '../../assets/img/icon-plus.svg';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  // Usa el hook useCart para acceder a las funciones del carrito
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Estados para la lógica de selección de producto
  const [mainImage, setMainImage] = useState('');
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  // Nuevo estado para la pestaña activa de información detallada
  const [activeTab, setActiveTab] = useState('description');

  useEffect(() => {
    const foundProduct = allProducts.find((p) => p.id === String(id));

    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.imageUrl);
      if (foundProduct.colors && foundProduct.colors.length > 0) {
        setSelectedColor(foundProduct.colors[0].name);
        setMainImage(foundProduct.colors[0].image || foundProduct.imageUrl);
      }
      if (foundProduct.sizes && foundProduct.sizes.length > 0) {
        setSelectedSize(foundProduct.sizes[0]);
      }
      setQuantity(1);
      setIsFavorite(false);
      setActiveTab('description');
    } else {
      setProduct(null);
    }
  }, [id]);

  // Manejadores de eventos

  const handleColorSelect = (colorName, imageUrl) => {
    setSelectedColor(colorName);
    setMainImage(imageUrl);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (type) => {
    setQuantity((prevQty) => {
      if (!product) return prevQty;
      if (type === 'increase') {
        return Math.min(prevQty + 1, product.stock);
      } else {
        return Math.max(1, prevQty - 1);
      }
    });
  };

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Por favor, selecciona un color y una talla antes de añadir al carrito.');
      return;
    }
    if (!product) {
        console.error("Producto no cargado al intentar añadir al carrito.");
        return;
    }

    const itemToAdd = {
      id: product.id,
      name: product.name,
      imageUrl: mainImage,
      price: product.newPrice,
      selectedColor: selectedColor,
      selectedSize: selectedSize,
      quantity: quantity,
      stock: product.stock,
    };

    addToCart(itemToAdd);
    // console.log para verificar que se añade al carrito, si lo necesitas
    console.log('Producto añadido al carrito:', itemToAdd.name);
  };

  /**
   * @function handleBuyNow
   * @description Maneja el clic en el botón "Comprar Ahora".
   */

  const handleBuyNow = () => {
    if (!selectedColor || !selectedSize) {
      alert('Por favor, selecciona un color y una talla antes de comprar.');
      return;
    }
    if (!product) {
        console.error("Producto no cargado al intentar comprar ahora.");
        return;
    }

    console.log('Botón "Comprar Ahora" clicado. Redirigiendo a /en-construccion.');
    navigate('/en-construccion');
  };


  const handleHeartClick = () => {
    setIsFavorite((prev) => !prev);
    if (!isFavorite) {
        console.log(`"${product.name}" añadido a favoritos.`);
    } else {
        console.log(`"${product.name}" quitado de favoritos.`);
    }
  };


  if (!product) {
    return (
      <main className="product-main">
        <h2>Producto no encontrado</h2>
        <p>Lo sentimos, no pudimos encontrar el producto con el ID: {id}</p>
        <Link to="/">Volver a la página principal</Link>
      </main>
    );
  }

  return (
    <main className="product-main">
      <div className="breadcrumb">
        <Link to="/">Blessing Store</Link>
        <Link to="/en-construccion">Hombres</Link>
        <span>{product.name}</span>
      </div>

      <section className="product">
        <div className="product__gallery">
          <img id="img-producto" src={mainImage} alt={product.name} className="product__main-image-display" />
        </div>

        <div className="product__details">
          <div className="product__rating">
            {Array(Math.floor(product.rating)).fill().map((_, i) => (
              <img key={`star-${i}`} src={StarIcon} alt="Rating star" className="star-icon" />
            ))}
            <span>{product.rating}</span> ({product.reviewsCount} reviews)
          </div>
          <p className="product__name">{product.name}</p>

          <p>
            <strong>Color:</strong> <span id="color-seleccionado">{selectedColor}</span>
          </p>

          <div className="product__colors">
            {product.colors.map((color) => (
              <img
                key={color.name}
                src={color.image || product.imageUrl}
                alt={color.name}
                title={color.name}
                className={`color-seleccionable ${selectedColor === color.name ? 'active' : ''}`}
                onClick={() => handleColorSelect(color.name, color.image || product.imageUrl)}
              />
            ))}
          </div>

          <p>
            <strong>Talla:</strong> <span id="talla-seleccionada">{selectedSize}</span>
          </p>

          <div className="product__sizes">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={selectedSize === size ? 'active' : ''}
                onClick={() => handleSizeSelect(size)}
              >
                {size}
              </button>
            ))}
          </div>

          <p className="product__stock">
            Stock disponible: <span id="stock-disponible">{product.stock} unidad ({product.stock} disponibles)</span>
          </p>

          <p className="product__return">
            <strong>Devolución gratuita:</strong> Tienes 30 días desde que lo recibes.
            <Link to="/en-construccion">Conocer más</Link>
          </p>
        </div>

        <div className="product__actions">
          <div className="product__favorite" title="Add to favorites">
            <button className="btn-favorite" aria-label="Add to favorites" onClick={handleHeartClick}>
              <img src={isFavorite ? HeartFilledIcon : HeartIcon} alt="Img: Add to favorites" />
            </button>
          </div>

          <div className="product__price">
            <p>
              <span className="product__price-unit">{formatCurrency(cleanAndParsePrice(product.newPrice))}</span>
              <br />
              <del>{formatCurrency(cleanAndParsePrice(product.oldPrice))}</del>
              <span className="product__price-discount"> {product.discount}</span>
            </p>
          </div>

          <div className="product__buttons">
            <button className="btn btn-primary" onClick={handleBuyNow}>Comprar Ahora</button>
            <button className="btn btn-warning" onClick={handleAddToCart}>Agregar al carrito</button>
          </div>

          <div className="product__quantity">
            <button type="button" className="qty-btn qty-decrease" onClick={() => handleQuantityChange('decrease')}>
              <img src={MinusIcon} alt="Decrease quantity" />
            </button>
            <input type="number" id="cantidad" name="cantidad" min="1" max={product.stock} value={quantity} readOnly />
            <button type="button" className="qty-btn qty-increase" onClick={() => handleQuantityChange('increase')}>
              <img src={PlusIcon} alt="Increase quantity" />
            </button>
          </div>

          <p className="product__extra">
            <Link to="/en-construccion">Compra protegida</Link>, recibe el producto que esperabas o te devolvemos tu dinero.
          </p>
        </div>
      </section>

      <section className="product-detail-info">
        <div className="product-detail-info__tabs">
          <button
            className={`tab-button ${activeTab === 'description' ? 'active' : ''}`}
            onClick={() => setActiveTab('description')}
          >
            Descripción detallada
          </button>
          <button
            className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
            >
            Características
          </button>
          <button
            className={`tab-button ${activeTab === 'guide' ? 'active' : ''}`}
            onClick={() => setActiveTab('guide')}
          >
            Guía de tallas
          </button>
        </div>

        <div className="product-detail-info__content">
          {activeTab === 'description' && (
            <div className="tab-pane">
              <h3>Descripción del producto</h3>
              <p>{product.description}</p>
              <p>{product.longDescription}</p>
            </div>
          )}

          {activeTab === 'features' && (
            <div className="tab-pane">
              <h3>Características principales</h3>
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'guide' && (
            <div className="tab-pane">
              <h3>Guía de tallas</h3>
              <p>Consulta nuestra tabla de tallas para encontrar tu ajuste perfecto.</p>
              <p>Tallas disponibles: {product.sizes.join(', ')}</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default ProductDetail;