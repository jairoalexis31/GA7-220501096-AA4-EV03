import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/App.css'; // Importamos el archivo de estilos

const Header = () => {
  return (
    <header className="header">
      <h1>Inventory Management</h1>
      <nav>
        <Link to="/">Inicio</Link>
        <Link to="/products">Productos</Link>
        <Link to="/add-product">Agregar Producto</Link>
        <Link to="/profile">Perfil</Link>
      </nav>
    </header>
  );
};

export default Header;
