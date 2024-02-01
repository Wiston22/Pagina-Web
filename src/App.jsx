import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/contenidos/banner';
import CardWidget from './components/CardWidget';
import TopProductos from './components/TopProductos';
import Banner2 from './components/Banner2';
import Registro from './components/registro';
import Comentarios from './components/comentarios';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: 'ease-in-sine',
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Navbar />
      <Banner />
      <CardWidget />
      <TopProductos />
      <Banner2 />
      <Registro />
      <CardWidget />
      <Comentarios />
    </div>
  );
};

export default App;
