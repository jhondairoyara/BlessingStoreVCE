// src/components/CartList/CartList.jsx

import React from 'react';
import CartItem from '../CartItem/CartItem.jsx';
import './CartList.css';

function CartList({ items }) { // Recibe 'items' como prop
  return (
    <div className="cart-list-container">
      {items.map((item) => (
        <CartItem key={item.id + '-' + item.selectedColor + '-' + item.selectedSize} item={item} />
      ))}
    </div>
  );
}

export default CartList;