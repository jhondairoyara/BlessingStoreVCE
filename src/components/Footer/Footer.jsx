// src/components/Footer/Footer.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-blessing">
      <div className="footer-blessing__container">
        <section className="footer-blessing__brand">
          <div className="footer-blessing__logo-title">
            <img src="/src/assets/img/img-blessing-store.png" alt="Logo Blessing Store" className="footer-blessing__logo" />
            <p className="footer-blessing__title">Blessing Store</p>
          </div>
        </section>

        <section className="footer-blessing__mission">
          <h4>Nuestra Misión</h4>
          <p>En Blessing Store, nuestra misión es ofrecerte una cuidada selección de productos únicos y de alta calidad que no solo complementen tu estilo personal, sino que también te hagan sentir especial y seguro de ti mismo en cada ocasión.</p>
        </section>

        <section className="footer-blessing__social">
          <h4>Síguenos</h4>
          <div className="footer-blessing__social-icons">
            <a href="https://www.facebook.com/" className="footer-blessing__icon-link" target="_blank" rel="noopener noreferrer"><img src="/src/assets/img/icon-facebook.svg" alt="Facebook" /></a>
            <a href="https://www.instagram.com/" className="footer-blessing__icon-link" target="_blank" rel="noopener noreferrer"><img src="/src/assets/img/icon-instagram.svg" alt="Instagram" /></a>
            <a href="https://www.youtube.com/" className="footer-blessing__icon-link" target="_blank" rel="noopener noreferrer"><img src="/src/assets/img/icon-youtube.svg" alt="YouTube" /></a>
            <a href="https://x.com/" className="footer-blessing__icon-link" target="_blank" rel="noopener noreferrer"><img src="/src/assets/img/icon-x.svg" alt="X (Twitter)" /></a>
          </div>
        </section>
      </div>

      <div className="footer-blessing__links-separator"></div>

      <div className="footer-blessing__bottom-links">
        <Link to="/en-construccion">Sobre nosotros</Link>
        <Link to="/en-construccion">Contacto</Link>
        <Link to="/en-construccion">Preguntas Frecuentes</Link>
        <Link to="/en-construccion">Políticas de Privacidad</Link>
        <Link to="/en-construccion">Términos y Condiciones</Link>
      </div>

      <div className="footer-blessing__copyright-info">
        <p>© 2025 Blessing Store - Todos los derechos reservados.</p>
        <p>Hecho en React con ❤ por Jhon Dairo</p>
        <p>Envíos a todo el país.</p>
      </div>
    </footer>
  );
}

export default Footer;