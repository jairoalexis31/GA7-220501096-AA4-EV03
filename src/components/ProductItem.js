import React from 'react';
import { Link } from 'react-router-dom';
import './styles/App.css'; // Importamos el archivo de estilos

const ProductItem = ({ product }) => {
  return (
    <div className="product-item">
      <p>Nombre: {product.name}</p>
      <p>Cantidad: {product.quantity}</p>
      <p>Precio: ${product.price}</p>
      <div className="actions">
        <Link to={`/edit-product/${product.id}`}>Editar</Link>
        <button>Eliminar</button>
      </div>
    </div>
  );
};

export default ProductItem;
