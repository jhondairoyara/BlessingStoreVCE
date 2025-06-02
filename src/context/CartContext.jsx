// src/context/CartContext.jsx

import React, { createContext, useState, useEffect, useContext } from 'react';
import { cleanAndParsePrice } from '../utils/formatCurrency.js';

export const CartContext = createContext();

/**
 * Proveedor del contexto del carrito.
 * Gestiona el estado de los ítems del carrito y su persistencia en `localStorage`.
 * @param {object} props - Propiedades del componente.
 * @param {React.ReactNode} props.children - Componentes hijos que tendrán acceso al contexto.
 */
export const CartProvider = ({ children }) => {
    // Estado del carrito inicializado desde localStorage.
    // Asegura que los precios se conviertan a números limpios al cargar.
    const [cartItems, setCartItems] = useState(() => {
        try {
            const localCart = localStorage.getItem('cartItems');
            const parsedCart = localCart ? JSON.parse(localCart) : [];

            return parsedCart.map(item => ({
                ...item,
                // Convierte el precio a numérico, usando `newPrice` como fallback si `price` no existe.
                price: cleanAndParsePrice(item.price || item.newPrice)
            }));
        } catch (error) {
            console.error("Error al cargar el carrito desde localStorage:", error);
            return []; // Retorna un carrito vacío en caso de error.
        }
    });

    // Efecto para persistir el estado del carrito en localStorage cada vez que `cartItems` cambia.
    useEffect(() => {
        try {
            localStorage.setItem('cartItems', JSON.stringify(cartItems));
        } catch (error) {
            console.error("Error al guardar el carrito en localStorage:", error);
        }
    }, [cartItems]);

    /**
     * Añade un producto al carrito. Si el producto ya existe (por ID, color y talla),
     * actualiza la cantidad. Si no, lo añade como un nuevo ítem.
     * Realiza validaciones de stock y formato de precio.
     *
     * @param {object} productToAdd - El producto a añadir, incluyendo `id`, `selectedColor`,
     * `selectedSize`, `quantity`, `stock`, y `price` (que puede ser string o number).
     */
    const addToCart = (productToAdd) => {
        setCartItems((prevItems) => {
            // Limpia y convierte el precio del producto a añadir a un número.
            const priceAsNumber = cleanAndParsePrice(productToAdd.price);

            if (isNaN(priceAsNumber)) {
                console.error(`Error: El precio de "${productToAdd.name}" no es un número válido después de la limpieza. No se añadirá al carrito.`);
                return prevItems; // No modifica el carrito si el precio no es válido.
            }

            // Busca si el ítem ya existe en el carrito (mismo producto, color y talla).
            const existingItemIndex = prevItems.findIndex(
                (item) =>
                    item.id === productToAdd.id &&
                    item.selectedColor === productToAdd.selectedColor &&
                    item.selectedSize === productToAdd.selectedSize
            );

            if (existingItemIndex > -1) {
                // Si el ítem existe, actualiza su cantidad.
                const updatedItems = [...prevItems];
                const currentQty = updatedItems[existingItemIndex].quantity;
                const newQty = currentQty + productToAdd.quantity;

                if (newQty <= productToAdd.stock) {
                    updatedItems[existingItemIndex].quantity = newQty;
                } else {
                    // Manejo de stock excedido.
                    console.warn(`No se pudo añadir más de "${productToAdd.name}". Stock máximo alcanzado.`);
                    alert(`¡Lo sentimos! No hay suficiente stock disponible para añadir ${productToAdd.quantity} unidades más de "${productToAdd.name}". Quedan ${productToAdd.stock - currentQty} unidades.`);
                    updatedItems[existingItemIndex].quantity = productToAdd.stock; // Ajusta la cantidad al stock máximo disponible.
                }
                updatedItems[existingItemIndex].price = priceAsNumber; // Asegura que el precio también sea numérico.
                return updatedItems;
            } else {
                // Si el ítem no existe, lo añade como nuevo.
                // Valida la cantidad inicial contra el stock.
                const initialQuantity = productToAdd.quantity > productToAdd.stock ? productToAdd.stock : productToAdd.quantity;

                if (initialQuantity === 0) {
                    alert(`¡Lo sentimos! "${productToAdd.name}" está agotado.`);
                    return prevItems; // No añade si no hay stock disponible.
                }

                return [...prevItems, { ...productToAdd, price: priceAsNumber, quantity: initialQuantity }];
            }
        });
    };

    /**
     * Elimina un ítem específico del carrito.
     * @param {string} productId - ID del producto a eliminar.
     * @param {string} color - Color del producto a eliminar.
     * @param {string} size - Talla del producto a eliminar.
     */
    const removeItem = (productId, color, size) => {
        setCartItems((prevItems) =>
            prevItems.filter(
                (item) =>
                    !(item.id === productId && item.selectedColor === color && item.selectedSize === size)
            )
        );
    };

    /**
     * Actualiza la cantidad de un ítem existente en el carrito.
     * La cantidad se ajusta para no exceder el stock disponible y ser al menos 1.
     * @param {string} productId - ID del producto.
     * @param {string} color - Color del producto.
     * @param {string} size - Talla del producto.
     * @param {number} newQuantity - La nueva cantidad deseada.
     */
    const updateItemQuantity = (productId, color, size, newQuantity) => {
        setCartItems((prevItems) => {
            const updatedItems = prevItems.map((item) => {
                if (item.id === productId && item.selectedColor === color && item.selectedSize === size) {
                    const quantityToSet = Math.max(1, Math.min(newQuantity, item.stock));
                    return { ...item, quantity: quantityToSet };
                }
                return item;
            });
            return updatedItems;
        });
    };

    /** Vacía completamente el carrito de compras.*/
    const clearCart = () => {
        setCartItems([]);
    };

    /**
     * Calcula y retorna el número total de unidades en el carrito.
     * @returns {number} Cantidad total de ítems.
     */
    const getTotalItems = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    /**
     * Calcula y retorna el valor monetario total de todos los productos en el carrito.
     * Realiza la limpieza y parseo del precio como una salvaguarda.
     * @returns {number} Valor total del carrito.
     */
    const getCartTotal = () => {
        if (!cartItems || cartItems.length === 0) {
            return 0;
        }
        return cartItems.reduce((total, item) => {
            const price = cleanAndParsePrice(item.price);
            const quantity = parseInt(item.quantity, 10);
            return total + (isNaN(price) ? 0 : price) * (isNaN(quantity) ? 0 : quantity);
        }, 0);
    };

    // Objeto que expone los valores y funciones del carrito a los componentes consumidores.
    const contextValue = {
        cartItems,
        addToCart,
        removeItem,
        updateItemQuantity,
        clearCart,
        getTotalItems,
        getCartTotal,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

/**
 * Hook personalizado `useCart`.
 * Permite a cualquier componente funcional consumir el contexto del carrito.
 * Lanza un error si se usa fuera de `CartProvider`.
 * @returns {object} El valor del contexto del carrito.
 */
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart debe ser usado dentro de un CartProvider');
    }
    return context;
};