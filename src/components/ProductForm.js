import React, { useState, useEffect } from 'react';
import api from '../services/api';
import './styles/App.css'; // Importamos el archivo de estilos

const ProductForm = ({ match, history }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const isEditMode = !!match.params.id;

  useEffect(() => {
    if (isEditMode) {
      fetchProduct(match.params.id);
    }
  }, [isEditMode, match.params.id]);

  const fetchProduct = async (id) => {
    try {
      const response = await api.get(`/products/${id}`);
      setName(response.data.name);
      setQuantity(response.data.quantity);
      setPrice(response.data.price);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (isEditMode) {
        await api.put(`/products/${match.params.id}`, { name, quantity, price });
      } else {
        await api.post('/products', { name, quantity, price });
      }
      history.push('/products');
    } catch (error) {
      console.error('Error submitting product:', error);
    }
  };

  return (
    <form className="product-form" onSubmit={handleSubmit}>
      <h2>{isEditMode ? 'Editar Producto' : 'Agregar Producto'}</h2>
      <label>
        Nombre:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </label>
      <label>
        Cantidad:
        <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)} required />
      </label>
      <label>
        Precio:
        <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} required />
      </label>
      <button type="submit">{isEditMode ? 'Actualizar' : 'Agregar'}</button>
    </form>
  );
};

export default ProductForm;
