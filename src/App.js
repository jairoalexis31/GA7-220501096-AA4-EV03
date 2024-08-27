import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from 'src/components/Header';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import UserProfile from './components/UserProfile';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/products" component={ProductList} />
        <Route path="/add-product" component={ProductForm} />
        <Route path="/edit-product/:id" component={ProductForm} />
      </Switch>
    </div>
  );
};

export default App;
