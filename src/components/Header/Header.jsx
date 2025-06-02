// src/components/Header/Header.jsx

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import CartIcon from '../CartIcon/CartIcon.jsx';

function Header() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedMunicipio, setSelectedMunicipio] = useState('');
  const [displayLocation, setDisplayLocation] = useState('Ingresa tu ubicación');
  const [isLocationFormVisible, setIsLocationFormVisible] = useState(false);

  /**
   * Maneja el cambio en el selector de departamento.
   * @param {Object} e - Evento de cambio.
   */
  const handleDepartmentChange = (e) => {
    setSelectedDepartment(e.target.value);
  };

  /**
   * Maneja el cambio en el input del municipio.
   * @param {Object} e - Evento de cambio.
   */
  const handleMunicipioChange = (e) => {
    setSelectedMunicipio(e.target.value);
  };

  const handleLocationSubmit = () => {
    let newLocationText = 'Ingresa tu ubicación';
    if (selectedDepartment && selectedMunicipio) {
      newLocationText = `${selectedMunicipio}, ${selectedDepartment}`;
    } else if (selectedMunicipio) {
      newLocationText = selectedMunicipio;
    } else if (selectedDepartment) {
      newLocationText = selectedDepartment;
    }
    setDisplayLocation(newLocationText);
    setIsLocationFormVisible(false);
  };

  const toggleLocationFormVisibility = () => {
    setIsLocationFormVisible(!isLocationFormVisible);
  };

  return (
    <header>
      {/* Primera sección del encabezado: Logo y Ubicación */}
      <section className="header__first-section">
        <div className="header__logo-title">
          <div className="header__logo">
            <Link to="/">
              <img src="/src/assets/img/img-blessing-store.png" alt="Logo: Blessing Store" />
            </Link>
          </div>
          <div className="header__title">
            <Link to="/">Blessing Store</Link>
          </div>
        </div>

        <div
          className="header__location dropdown"
          onClick={toggleLocationFormVisibility}
        >
          <img src="/src/assets/img/icon-location.svg" alt="Icon: Location" />
          <p id="ubicacionTexto">{displayLocation}</p> {/* Muestra la ubicación seleccionada */}

          <div
            className={`location-form dropdown-menu ${isLocationFormVisible ? 'visible' : ''}`}
            onClick={(e) => e.stopPropagation()}
          >
            <p className="location-title">Elige dónde recibir tus compras</p>
            <p className="location-subtitle">Podrás ver costos y tiempos de entrega precisos en todo lo que busques.</p>

            <label htmlFor="departamento">Departamento</label>
            <select
              id="departamento"
              name="departamento"
              value={selectedDepartment}
              onChange={handleDepartmentChange}
            >
              <option value="Amazonas">Amazonas</option>
              <option value="Antioquia">Antioquia</option>
              <option value="Arauca">Arauca</option>
              <option value="Atlántico">Atlántico</option>
              <option value="Bolívar">Bolívar</option>
              <option value="Boyacá">Boyacá</option>
              <option value="Caldas">Caldas</option>
              <option value="Caquetá">Caquetá</option>
              <option value="Casanare">Casanare</option>
              <option value="Cauca">Cauca</option>
              <option value="Cesar">Cesar</option>
              <option value="Chocó">Chocó</option>
              <option value="Córdoba">Córdoba</option>
              <option value="Cundinamarca">Cundinamarca</option>
              <option value="Guainía">Guainía</option>
              <option value="Guaviare">Guaviare</option>
              <option value="Huila">Huila</option>
              <option value="La Guajira">La Guajira</option>
              <option value="Magdalena">Magdalena</option>
              <option value="Meta">Meta</option>
              <option value="Nariño">Nariño</option>
              <option value="Norte de Santander">Norte de Santander</option>
              <option value="Putumayo">Putumayo</option>
              <option value="Quindío">Quindío</option>
              <option value="Risaralda">Risaralda</option>
              <option value="San Andrés y Providencia">San Andrés y Providencia</option>
              <option value="Santander">Santander</option>
              <option value="Sucre">Sucre</option>
              <option value="Tolima">Tolima</option>
              <option value="Valle del Cauca">Valle del Cauca</option>
              <option value="Vaupés">Vaupés</option>
              <option value="Vichada">Vichada</option>
            </select>

            <label htmlFor="municipio">Municipio, capital o localidad</label>
            <input
              type="text"
              id="municipio"
              name="municipio"
              placeholder="Ej. Leticia"
              value={selectedMunicipio}
              onChange={handleMunicipioChange}
            />

            <button
              type="button"
              className="location-submit"
              onClick={handleLocationSubmit}
            >
              Aceptar
            </button>
          </div>
        </div>
      </section>

      {/* Segunda sección del encabezado: Búsqueda y Navegación principal */}
      <section className="header__second-section">
        {/* Formulario de Búsqueda */}
        <form action="/en-construccion" method="get" className="search-form">
          <input
            type="search"
            id="search"
            name="search"
            placeholder="Busca lo que más deseas"
            aria-label="Buscar productos"
          />
          <button type="submit" aria-label="Buscar">
            <img src="/src/assets/img/icon-search.svg" alt="Buscar" />
          </button>
        </form>

        {/* Navegación principal */}
        <nav>
          <ul>
            {/* Dropdown de Categorías */}
            <li className="dropdown">
              <button id="categoryToggle" className="dropdown-toggle">
                Categorías
              </button>
              <ul id="categoryMenu" className="dropdown-menu">
                <li><Link to="/en-construccion">Hombre</Link></li>
                <li><Link to="/en-construccion">Mujer</Link></li>
                <li><Link to="/en-construccion">Niños/as</Link></li>
                <li><Link to="/en-construccion">Bebes</Link></li>
              </ul>
            </li>

            {/* Dropdown de Mis compras */}
            <li className="dropdown">
              <button className="dropdown-toggle">
                Mis compras
              </button>
              <ul className="dropdown-menu">
                <li><Link to="/en-construccion">Mis Pedidos</Link></li>
                <li><Link to="/en-construccion">Ultimos Pedidos</Link></li>
                <li><Link to="/en-construccion">Comprobantes</Link></li>
                <li><Link to="/en-construccion">Soporte</Link></li>
              </ul>
            </li>
            
            {/* Dropdown de Favoritos */}
            <li className="dropdown">
              <button className="dropdown-toggle">Favoritos</button>
              <ul className="dropdown-menu">
                <li><Link to="/cart">Carrito</Link></li>
                <li><Link to="/en-construccion">Próximamente</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>

      {/* Tercera sección del encabezado: Accesos Rápidos (Acceder, Notificaciones, Carrito) */}
      <section className="header__third-section">
        <Link to="/en-construccion" id="access">Acceder<img src="/src/assets/img/icon-arrow-right.svg" alt="Icon: Right arrow" /></Link>
        <Link to="/en-construccion"><img src="/src/assets/img/icon-notification-light.svg" alt="Icon: Notification" /></Link>
        <CartIcon />
      </section>
    </header>
  );
}

export default Header;