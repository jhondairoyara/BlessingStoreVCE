// src/components/CartItem/CartItem.jsx

// Imports
import React from 'react';
import { useCart } from '../../context/CartContext.jsx';
import TrashIcon from '../../assets/img/icon-trash.svg';
import MinusIcon from '../../assets/img/icon-minus.svg';
import PlusIcon from '../../assets/img/icon-plus.svg';
import './CartItem.css';
import { formatCurrency, cleanAndParsePrice } from '../../utils/formatCurrency.js';

// Component
function CartItem({ item }) {
  // Hooks / Context
  const { updateItemQuantity, removeItem } = useCart();

  // Variables
  const itemPrice = cleanAndParsePrice(item.price);
  const itemQuantity = item.quantity;
  const itemSubtotal = itemPrice * itemQuantity;

  // Handlers
  const handleQuantityChange = (type) => {
    if (type === 'increase') {
      if (itemQuantity < item.stock) {
        updateItemQuantity(item.id, item.selectedColor, item.selectedSize, itemQuantity + 1);
      } else {
        alert('No hay más stock disponible de este producto.');
      }
    } else {
      if (itemQuantity === 1) {
        if (window.confirm(`¿Estás seguro de que quieres eliminar "${item.name}" del carrito?`)) {
          removeItem(item.id, item.selectedColor, item.selectedSize);
        }
      } else {
        updateItemQuantity(item.id, item.selectedColor, item.selectedSize, itemQuantity - 1);
      }
    }
  };

  const handleRemoveItem = () => {
    if (window.confirm(`¿Estás seguro de que quieres eliminar "${item.name}" del carrito?`)) {
      removeItem(item.id, item.selectedColor, item.selectedSize);
    }
  };

  // Render 
  return (
    <div className="cart-item">
      
      {/* Imagen del producto  */}
      <div className="cart-item__image-wrapper">
        <img src={item.imageUrl} alt={item.name} className="cart-item__image" />
      </div>

      {/* Detalles del producto */}
      <div className="cart-item__details">
        <h3 className="cart-item__name">{item.name}</h3>
        <p className="cart-item__attributes">
          Color: <span>{item.selectedColor}</span> | Talla: <span>{item.selectedSize}</span>
        </p>
        <p className="cart-item__price">{formatCurrency(itemPrice)}</p>
        {item.stock > 0 ? (
          item.stock <= 5 && (
            <p className="cart-item__stock-info low-stock">
              Stock: ¡Sólo quedan {item.stock} unidades!
            </p>
          )
        ) : (
          <p className="cart-item__stock-info out-of-stock">Agotado</p>
        )}
      </div>

      {/* Controles de cantidad y eliminación */}
      <div className="cart-item__actions">
        <div className="cart-item__quantity-controls">
          <button
            onClick={() => handleQuantityChange('decrease')}
            className="qty-btn"
            aria-label="Disminuir cantidad"
            disabled={itemQuantity <= 1}
          >
            <img src={MinusIcon} alt="Decrease quantity" />
          </button>
          <input type="number" value={itemQuantity} readOnly className="qty-input" />
          <button
            onClick={() => handleQuantityChange('increase')}
            className="qty-btn"
            aria-label="Aumentar cantidad"
            disabled={itemQuantity >= item.stock}
          >
            <img src={PlusIcon} alt="Increase quantity" />
          </button>
        </div>
        <button
          onClick={handleRemoveItem}
          className="cart-item__remove-btn"
          aria-label="Eliminar producto del carrito"
        >
          <img src={TrashIcon} alt="Eliminar" />
        </button>
      </div>

      {/* Subtotal del ítem */}
      <div className="cart-item__subtotal">
        <span>Subtotal:</span>
        <span className="cart-item__subtotal-value">{formatCurrency(itemSubtotal)}</span>
      </div>
      
    </div>
  );
}

// Export
export default CartItem;