import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import Navbar from './components/Navbar';
import Banner from './components/contenidos/banner';
import CardWidget from './components/CardWidget';
import TopProductos from './components/TopProductos';
import Banner2 from './components/Banner2';
import Registro from './components/registro';
import Comentarios from './components/comentarios';
import Footer from './components/Footer';
import Carrito from './components/Carrito';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter((cartItem) => cartItem !== item);
    setCartItems(updatedCartItems);
  };

  return (
    <Router>
      <div>
        <Navbar />
        <Banner />
        <CardWidget cartItems={cartItems} />
        <TopProductos addToCart={addToCart} />
        <Banner2 />
        <Registro />
        <Comentarios />
        <Footer />
        {/* Enlace al carrito */}
        <Link to="/carrito">Carrito</Link>
        {/* Definición de rutas */}
        <Routes>
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
