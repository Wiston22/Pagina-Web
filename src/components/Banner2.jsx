import React from 'react'
import BannerImg from "../assets/banner/3Sudadera_con_capucha_Negro_GN3171_21_model.webp";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const Banner2 = () => {
  return (
    <div className="min-h-[550px] flex justify-center items-center py-12 sm:py-0">
    <div className="container">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
        {/* image section */}
        <div data-aos="zoom-in">
          <img
            src={BannerImg}
            alt=""
            className="max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover"
          />
        </div>

        {/* text details section */}
        <div className="flex flex-col justify-center gap-6 sm:pt-0">
          <h1 data-aos="fade-up" className="text-3xl sm:text-4xl font-bold">
          Oferta de invierno hasta 50% de descuento
          </h1>
          <p
            data-aos="fade-up"
            className="text-sm text-gray-500 tracking-wide leading-5"
          >
          Disfruta nuestro sueter para ese invierno esperado, con estas caracteristicas:
          </p>
          <div className="flex flex-col gap-4">
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GrSecure className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
              <p>Producto de calidad</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <IoFastFood className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
              <p>Delivery rapido y seguro</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
              <p>Metodo de pago facil</p>
            </div>
            <div data-aos="fade-up" className="flex items-center gap-4">
              <GiFoodTruck className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
              <p>Obten buenas ofertas</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};
  


export default Banner2
