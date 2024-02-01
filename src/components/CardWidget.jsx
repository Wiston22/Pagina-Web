import React from 'react';
import img1 from '../assets/Caballero/camisa1.jpg';
import img2 from '../assets/Caballero/camisa2.jpg';
import img3 from '../assets/Caballero/camisa3.jpg';
import img4 from '../assets/Caballero/Zapato1.jpg';
import img5 from '../assets/Caballero/zapato2.jpg';
import img6 from '../assets/Caballero/zapato3.jpg';
import { FaStar } from 'react-icons/fa';

const productsData = [
  {
    id: 1,
    img: img1,
    title: 'Camisa Adidas',
    rating: 5.0,
    color: 'White',
    aosDelay: '100',
  },
  {
    id: 2,
    img: img2,
    title: 'Camisa Adidas',
    rating: 4.7,
    color: 'red',
    aosDelay: '200',
  },
  {
    id: 3,
    img: img3,
    title: 'Camisa Adidas',
    rating: 4.8,
    color: 'brown',
    aosDelay: '400',
  },
  {
    id: 4,
    img: img4,
    title: 'Zapato Adidas',
    rating: 5.0,
    color: 'White',
    aosDelay: '400',
  },
  {
    id: 5,
    img: img5,
    title: 'Calzado Adidas',
    rating: 4.5,
    color: 'White',
    aosDelay: '500',
  },
  {
    id: 6,
    img: img6,
    title: 'Calzado Adidas',
    rating: 5.0,
    color: 'White',
    aosDelay: '600',
  },
];

const CardWidget = () => {
  return (
    <div className='mt-14 mb-12'>
      <div className='container'>
        {/* header seccion */}
        <div className='text-center mb-10 max-w-[600px] mx-auto'>
          <p data-aos="fade-up" className='text-sm text text-primary'>Productos más vendidos para ti</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold'>Productos</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400'>Texto a ver qué hago</p>
        </div>
        {/* body seccion */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5'>
            {/* card seccion */}
            {productsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aosdelay={data.aosDelay} // Corrige aquí
                key={data.id}
                className='space-y-3'>
                <img src={data.img} alt={data.title} className='h-[220px] w-[150px] object-cover rounded-md' />
                {console.log("Ruta dwifseeee:", data)}
                <div>
                  <h3 className='font-semibold'>{data.title}</h3>
                  <p className='text-sm text-gray-600'>{data.color}</p>
                  <div className='flex items-center gap-1'>
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center">
            <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
              Ver mas Button
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardWidget;
