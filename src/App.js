import React from 'react';
import './App.css';
import ProductCard from './ProductCard';

const productsList = [
  {
    id: 0, 
    name: "Cotización",
    description: "Hablar con nosotros para determinar el alcance de su proyecto",
    price: "$0.00 MXN",
    category: "Consulta"
  },
  {
    id: 1, 
    name: "Diseño de Logo",
    description: "Hablar con nosotros para determinar el alcance de su proyecto",
    price: "$2499.00 MXN",
    category: "Diseño"
  },
  {
    id: 2, 
    name: "Mural customizado 4x2m",
    description: "Hablar con nosotros para determinar el alcance de su proyecto",
    price: "$2995.00 MXN",
    category: "Pintura"
  },
  {
    id: 3, 
    name: "Mural customizado 8x2m",
    description: "Hablar con nosotros para determinar el alcance de su proyecto",
    price: "$5995.00 MXN",
    category: "Pintura"
  }
]

function App() {
  return (
    <div className="App">
      <h1>Lista de productos de pintura:</h1>
      <h4>{ productsList.map(p => <ProductCard product={p} /> ) }</h4>
    </div> 
  );
}

export default App;
