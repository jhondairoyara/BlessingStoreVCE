// src/utils/formatCurrency.js

/**
 * Formatea un número a una cadena de texto con formato de moneda local (Colombiana).
 * @param {number} amount - El número a formatear.
 * @param {string} [locale='es-CO'] - Código de localización.
 * @param {string} [currency='COP'] - Código de moneda.
 * @returns {string} El valor formateado (ej. "$ 83.700").
 */
export const formatCurrency = (amount, locale = 'es-CO', currency = 'COP') => {
  const numericAmount = typeof amount === 'number' && !isNaN(amount) ? amount : 0;

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericAmount);
};

/**
 * Limpia una cadena de texto de precio y la convierte a un número entero.
 * @param {string | number} priceString - La cadena o número de precio.
 * @returns {number} El precio como número entero.
 */
export const cleanAndParsePrice = (priceString) => {
  // Si ya es un número válido, lo devuelve directamente
  if (typeof priceString === 'number' && !isNaN(priceString)) {
    return priceString;
  }

  // Si no es un string, devuelve 0
  if (typeof priceString !== 'string') {
    return 0;
  }

  // Elimina símbolos de moneda, espacios y separadores de miles
  let cleanedString = priceString.replace(/[\s$.]/g, '');

  // Convierte a número entero
  const parsedNumber = parseInt(cleanedString, 10);

  // Retorna el número o 0 si la conversión falla
  return isNaN(parsedNumber) ? 0 : parsedNumber;
};