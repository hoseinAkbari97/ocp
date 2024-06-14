import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Order from './components/Order';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductList />} />
      <Route path="/ProductDetail/:id" element={<ProductDetail />} />
      <Route path="/Cart" element={<Cart />} />
      <Route path="/Order" element={<Order />} />
    </Routes>
  );
}

export default App;
