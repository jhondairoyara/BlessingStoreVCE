// src/pages/UnderConstructionPage/UnderConstructionPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './UnderConstructionPage.css';

import underConstructionGraphic from '../../assets/img/icon-construction.svg';

const UnderConstructionPage = () => {

  const handlePaymentClick = () => {
    console.log('Clic en la tarjeta "Comprar Ahora (Proceso de Pago)". Funcionalidad en desarrollo.');
  };

  return (
    <div className="under-construction-container">
      {/* Sección principal de encabezado */}
      <img
        src={underConstructionGraphic}
        alt="Sección en Construcción - Por favor, vuelve pronto"
        className="under-construction-image"
      />
      <h1 className="under-construction-title">¡Estamos construyendo algo grandioso!</h1>
      <p className="under-construction-message">
        Nuestra web está recibiendo una gran actualización para ofrecerte la mejor experiencia de compra.
        Pronto podrás disfrutar de todas estas increíbles secciones y funcionalidades:
      </p>

      {/* --- Grupo: Información y Legal --- */}
      <h2 className="section-group-title">Información y Legal</h2>
      <div className="upcoming-features-grid">
        {/* Tarjeta: Sobre Nosotros */}
        <div className="feature-item">
          <h3 className="feature-item-title">Sobre Nosotros</h3>
          <p className="feature-item-description">
            Descubre nuestra historia, la misión que nos impulsa y los valores fundamentales de Blessing Store.
            Esta sección, actualmente en desarrollo, te permitirá conocernos mejor y entender nuestro compromiso con la calidad.
          </p>
        </div>
        {/* Tarjeta: Contacto */}
        <div className="feature-item">
          <h3 className="feature-item-title">Contacto</h3>
          <p className="feature-item-description">
            Pronto podrás acceder a formas rápidas y sencillas de comunicarte con nuestro equipo de atención al cliente.
            Esta sección en construcción incluirá líneas telefónicas y correo electrónico para todas tus consultas.
          </p>
        </div>
        {/* Tarjeta: Preguntas Frecuentes (FAQ) */}
        <div className="feature-item">
          <h3 className="feature-item-title">Preguntas Frecuentes (FAQ)</h3>
          <p className="feature-item-description">
            En esta sección, que estamos finalizando, encontrarás respuestas detalladas a las dudas más comunes sobre nuestros productos,
            procesos de compra, opciones de envío y políticas de devoluciones, diseñada para ofrecerte auto-servicio inmediato.
          </p>
        </div>
        {/* Tarjeta: Políticas de Privacidad */}
        <div className="feature-item">
          <h3 className="feature-item-title">Políticas de Privacidad</h3>
          <p className="feature-item-description">
            Conoce en detalle cómo protegemos tus datos personales, cómo los utilizamos y cuáles son tus derechos sobre ellos.
            Nuestra política de privacidad está siendo cuidadosamente actualizada para garantizar la máxima transparencia y seguridad.
          </p>
        </div>
        {/* Tarjeta: Términos y Condiciones */}
        <div className="feature-item">
          <h3 className="feature-item-title">Términos y Condiciones</h3>
          <p className="feature-item-description">
            Próximamente, los acuerdos legales que rigen el uso de nuestra plataforma y servicios estarán disponibles aquí.
            Esta sección en desarrollo es fundamental para asegurar una experiencia de compra justa y transparente para todos nuestros usuarios.
          </p>
        </div>
      </div>

      {/* --- Grupo: Categorías de Productos --- */}
      <h2 className="section-group-title">Explora nuestras Categorías</h2>
      <div className="upcoming-features-grid">
        {/* Tarjeta: Hombre */}
        <div className="feature-item">
          <h3 className="feature-item-title">Hombre</h3>
          <p className="feature-item-description">
            Prepárate para explorar nuestra próxima colección exclusiva para hombre, donde encontrarás la mejor moda,
            calzado y accesorios pensados para el estilo, la comodidad y las necesidades del caballero moderno.
          </p>
        </div>
        {/* Tarjeta: Mujer */}
        <div className="feature-item">
          <h3 className="feature-item-title">Mujer</h3>
          <p className="feature-item-description">
            Descubre las últimas tendencias y estilos exclusivos en nuestra futura sección de moda femenina.
            Estamos seleccionando cuidadosamente prendas y accesorios diseñados para realzar tu belleza y personalidad única.
          </p>
        </div>
        {/* Tarjeta: Niños/as */}
        <div className="feature-item">
          <h3 className="feature-item-title">Niños/as</h3>
          <p className="feature-item-description">
            Nuestra sección para niños y niñas está en pleno desarrollo, y pronto ofrecerá colecciones divertidas,
            seguras y cómodas. Ideales para acompañar a los más pequeños del hogar en todas sus aventuras diarias.
          </p>
        </div>
        {/* Tarjeta: Bebés */}
        <div className="feature-item">
          <h3 className="feature-item-title">Bebés</h3>
          <p className="feature-item-description">
            Prepárate para explorar todo lo necesario para los recién nacidos en nuestra futura sección de bebés.
            Contaremos con productos de máxima calidad y confort, pensados para el cuidado y bienestar integral de tu pequeño.
          </p>
        </div>
      </div>

      {/* --- Grupo: Funcionalidades de Usuario --- */}
      <h2 className="section-group-title">Tu Experiencia de Usuario</h2>
      <div className="upcoming-features-grid">
        {/* Tarjeta: Mis Pedidos */}
        <div className="feature-item">
          <h3 className="feature-item-title">Mis Pedidos</h3>
          <p className="feature-item-description">
            Esta funcionalidad en desarrollo te permitirá acceder al historial completo de todas tus compras realizadas
            y seguir el estado de tus envíos en tiempo real, todo desde un único y cómodo lugar en tu perfil.
          </p>
        </div>
        {/* Tarjeta: Últimos Pedidos */}
        <div className="feature-item">
          <h3 className="feature-item-title">Últimos Pedidos</h3>
          <p className="feature-item-description">
            Revisa rápidamente el estado y el seguimiento detallado de tus compras más recientes.
            Esta sección se está optimizando para ofrecerte la información más actualizada al instante, sin demoras.
          </p>
        </div>
        {/* Tarjeta: Comprobantes */}
        <div className="feature-item">
          <h3 className="feature-item-title">Comprobantes</h3>
          <p className="feature-item-description">
            Pronto podrás descargar tus facturas y comprobantes fiscales de forma sencilla y segura en formato digital.
            Esta funcionalidad facilitará la gestión y el archivo de todos tus documentos de compra importantes.
          </p>
        </div>
        {/* Tarjeta: Soporte */}
        <div className="feature-item">
          <h3 className="feature-item-title">Soporte</h3>
          <p className="feature-item-description">
            Nuestro equipo de soporte dedicado está en proceso de expansión para ofrecerte ayuda rápida y soluciones
            eficientes a todas tus preguntas. Garantizamos una excelente atención para resolver cualquier inquietud.
          </p>
        </div>
        {/* Tarjeta: Favoritos */}
        <div className="feature-item">
          <h3 className="feature-item-title">Favoritos</h3>
          <p className="feature-item-description">
            Esta funcionalidad en preparación te permitirá guardar tus productos preferidos para encontrarlos
            fácilmente en cualquier momento. Podrás crear una lista de deseos y agilizar tus futuras compras.
          </p>
        </div>
        {/* Tarjeta: Acceder / Registro */}
        <div className="feature-item">
          <h3 className="feature-item-title">Acceder / Registro</h3>
          <p className="feature-item-description">
            El acceso a tu cuenta personal y el proceso de registro están siendo mejorados.
            Podrás gestionar tus datos, iniciar sesión o registrarte rápidamente para disfrutar de todos nuestros beneficios exclusivos.
          </p>
        </div>
        {/* Tarjeta: Notificaciones */}
        <div className="feature-item">
          <h3 className="feature-item-title">Notificaciones</h3>
          <p className="feature-item-description">
            Recibe alertas personalizadas sobre el estado de tus pedidos, nuevas ofertas exclusivas y novedades importantes de la tienda.
            Esta funcionalidad está diseñada para mantenerte siempre informado y actualizado.
          </p>
        </div>
        {/* Tarjeta: Diseño Responsivo */}
        <div className="feature-item">
          <h3 className="feature-item-title">Diseño Responsivo</h3>
          <p className="feature-item-description">
            Estamos optimizando la visualización de Blessing Store en todos los dispositivos: desde smartphones y tablets hasta computadoras de escritorio.
            Disfruta de una experiencia de navegación fluida y una interfaz adaptada perfectamente a cualquier tamaño de pantalla.
          </p>
        </div>
        {/* Tarjeta: Buscador */}
        <div className="feature-item">
          <h3 className="feature-item-title">Buscador</h3>
          <p className="feature-item-description">
            Nuestro buscador en la tienda te permitirá encontrar productos de forma rápida y precisa.
            Podrás filtrar por categoría, precio, talla y otros criterios para localizar exactamente lo que buscas.
            Además, la búsqueda se optimiza con sugerencias en tiempo real y autocorrector para facilitar tu experiencia.
          </p>
        </div>
      </div>

      {/* --- Grupo: Opciones de Pago --- */}
      <h2 className="section-group-title">Opciones de Pago</h2>
      <div className="upcoming-features-grid">

        {/* Tarjeta: Comprar Ahora*/}
        <div className="feature-item" onClick={handlePaymentClick}>
          <h3 className="feature-item-title">Proceso de Pago</h3>
          <p className="feature-item-description">
            Estamos integrando un proceso de pago robusto y seguro para que tus transacciones sean rápidas y confiables.
            Pronto podrás disfrutar de diversas opciones de pago, incluyendo tarjetas de crédito/débito y otros métodos populares,
            con la máxima protección de tus datos financieros.
          </p>
        </div>
      </div>

      {/* Sección de botones de acción */}
      <div className="action-buttons">
        <Link to="/" className="btn-back-home">
          Volver a la página principal
        </Link>
      </div>

      {/* Texto de Copyright */}
      <p className="copyright-text">© 2025 Blessing Store - Todos los derechos reservados</p>
    </div>
  );
};

export default UnderConstructionPage;