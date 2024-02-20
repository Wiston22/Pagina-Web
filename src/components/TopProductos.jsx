import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Img1 from "../assets/Dama/calzadoDama.jpg";
import Img2 from "../assets/Dama/calzadoDama2.jpg";
import Img3 from "../assets/Dama/calzadoDama3.jpg";
import Img4 from "../assets/Dama/CamisaDama1.jpg";
import Img5 from "../assets/Dama/conjuntoAdidas1.jpg";
import Img6 from "../assets/Dama/ShortDama1.jpg";
import { FaStar } from "react-icons/fa";


const productsData = [
  {
    id: 1,
    img: Img1,
    title: 'Camisa para dama',
    description: "Camisa con tela importada"
  },
  {
    id: 2,
    img: Img2,
    title: 'Camisa para dama',
    description: "Camisa con tela importada"
  },
  {
    id: 3,
    img: Img3,
    title: 'Camisa para dama',
    description: "Camisa con tela importada"
  },
  {
    id: 4,
    img: Img4,
    title: 'Camisa para dama',
    description: "Camisa con tela importada"
  },
  {
    id: 5,
    img: Img5,
    title: 'Camisa para dama',
    description: "Camisa con tela importada"
  },
  {
    id: 6,
    img: Img6,
    title: 'Camisa para dama',
    description: "Camisa con tela importada"
  },
];

const TopProductos = () => {
  useEffect(() => {
    AOS.init(); // Inicializa AOS
  }, []); // Asegúrate de que este efecto se ejecute solo una vez al montar el componente

  return (
    <div>
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Dama
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Productos para usted
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Un gran catalogo con mucha variedades para las bellas damas.
          </p>
        </div>
        {/* body seccion */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center'>
          {productsData.map((data) => (
            <div data-aos="zoom-in" className='rounded-2xl overflow-hidden bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px]' key={data.id}>
              {/* imagen seccion */}
              <div className='h-[200px] overflow-hidden'>
                <img src={data.img} alt="" className="w-full h-full object-cover transform scale-105 duration-300 group-hover:scale-110" />
              </div>
              {/* detail seccion */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className='w-full flex items-center justify-center gap-1'>
                <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className='text-xl font-bold dark:text-white'>{data.title}</h1>
                <p className='text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2 dark:text-white'>{data.description}</p>
                <button className='bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary'>Compra ahora</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopProductos;
