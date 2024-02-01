import React from 'react';
import Slider from 'react-slick';
import Img1 from '../assets/Caballero/zapato1.jpg';
import Img2 from '../assets/Caballero/zapato2.jpg';
import Img3 from '../assets/Caballero/zapato3.jpg';
import Img4 from '../assets/Caballero/zapato1.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const TestimonialData = [
  {
    id: 1,
    img: Img1,
    name: 'Cristiano Ronaldo',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
  },
  {
    id: 2,
    name: 'Lionel Messi',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: Img2,
  },
  {
    id: 3,
    name: 'Kylian Mbappé',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: Img3,
  },
  {
    id: 4,
    name: 'Vinícius Júnior',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio',
    img: Img4,
  },
];
const Comentarios = () => {
  console.log("Entró a Comentarios");

  var settings = {
    // Activa los puntos de navegación debajo del slider
    dots: true,
    // Deslizamiento infinito, el slider no termina nunca
    infinite: true,
    // Velocidad de la transición entre slides en milisegundos
    speed: 500,
    // Número de slides a mostrar en pantalla
    slidesToShow: 3,
    // Número de slides a desplazar en el scroll
    slidesToScroll: 1,
    // Activa el autoplay para cambiar slides automáticamente
    autoplay: true,
    // Velocidad del autoplay en milisegundos (ej., 2000 = 2 segundos)
    autoplaySpeed: 2000,
    // Efecto de desvanecimiento en lugar de deslizar (útil para un solo slide a la vez)
    fade: false,
    // Añade un efecto de "ease" para las transiciones
    cssEase: 'ease-in-out',
    // Muestra flechas de navegación en el slider
    arrows: true,
    // Pausa el autoplay cuando el mouse está sobre el slider
    pauseOnHover: true,
    // Adaptable a la respuesta para diferentes tamaños de pantalla
    responsive: [
      {
        // Disposición para pantallas grandes
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        // Disposición para tablets
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        // Disposición para móviles
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Comentarios destacados
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Comentarios
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
           Los mejores desportistas del mundo comentan sobre nuestra pagina.
          </p>
        </div>

        {/* Testimonial cards */}
    
        <div data-aos="zoom-in">
            <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
              <div className="mb-4">
                <img src={data.img} alt="" />
              </div>
              <div className="flex flex-col items-center gap-4">
                <div className="space-y-3">
                  <p>{data.text}</p>
                  <h1>{data.name}</h1>
                </div>
              </div>
              <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">,</p>
        </div>
      </div>
    ))}
  </Slider>
          
</div>
      </div>
    </div>
  );
};

export default Comentarios;
