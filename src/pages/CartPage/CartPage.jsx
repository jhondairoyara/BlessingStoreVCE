// src/pages/CartPage/CartPage.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext.jsx';
import CartList from '../../components/CartList/CartList.jsx';
import { formatCurrency } from '../../utils/formatCurrency.js';
import './CartPage.css';

function CartPage() {

  // Hooks y Acceso al Contexto
  const { cartItems, getCartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  // Manejadores de Eventos
  const handleCheckout = () => {
    navigate('/en-construccion');
  };

  // Renderizado del Componente
  return (
    <main className="cart-page-main">
      <h1 className="cart-page-title">Mi Carrito de Compras</h1>

      {cartItems.length === 0 ? (

        // Sección para carrito vacío
        <div className="cart-empty-message">
          <p>Tu carrito está vacío.</p>
          <Link to="/" className="cart-page-btn-primary">Volver a la tienda</Link>
        </div>
      ) : (
        
        // Sección para carrito con ítems
        <div className="cart-content">
          <div className="cart-items-section">
            <CartList items={cartItems} />
            <div className="cart-actions-bottom">
              <Link to="/" className="cart-page-btn-secondary">Continuar comprando</Link>
              <button onClick={clearCart} className="cart-page-btn-danger">Vaciar Carrito</button>
            </div>
          </div>

          {/* Resumen de la compra */}
          <aside className="cart-summary">
            <h2>Resumen de Compra</h2>
            <div className="summary-item">
              <span>Subtotal ({cartItems.length} {cartItems.length === 1 ? 'producto' : 'productos'})</span>
              <span>{formatCurrency(getCartTotal())}</span>
            </div>
            <div className="summary-item">
              <span>Envío</span>
              <span>Gratis</span>
            </div>
            <hr />
            <div className="summary-total">
              <h3>Total</h3>
              <h3>{formatCurrency(getCartTotal())}</h3>
            </div>
            <button className="cart-page-btn-checkout" onClick={handleCheckout}>Proceder al pago</button>
          </aside>
        </div>
      )}
    </main>
  );
}

export default CartPage;