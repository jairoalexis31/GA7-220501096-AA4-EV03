// src/App.js
import React from 'react';
import Header from './components/Header';
import './styles/App.css'; // Asegúrate de que la ruta sea correcta

function App() {
  return (
    <div className="App">
      <Header />
      <h1>Esto es una página web</h1>
    </div>
  );
}

export default App;
console.log("App component rendered");