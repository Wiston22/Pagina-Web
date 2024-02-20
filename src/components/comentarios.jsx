import React from 'react';
import Slider from 'react-slick';
import Img1 from '../assets/website/cr7.jpg';
import Img2 from '../assets/banner/15167.png';
import Img3 from '../assets/banner/mbappe.png';
import Img4 from '../assets/banner/vini.jpg';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ComentariosData = [
  {
    id: 1,
    img: Img1,
    name: 'Cristiano Ronaldo',
    text: 'Increible Marca, encantado de poder usar Adidas.',
  },
  {
    id: 2,
    name: 'Lionel Messi',
    text: 'Mi patrocinador oficial tiene las mejores ofertas, Encantado de usar Adidas por siempre. ',
    img: Img2,
  },
  {
    id: 3,
    name: 'Kylian Mbappé',
    text: 'PSG esta encantado de poder usar Adidas en nuestras playeras como patrocinador.',
    img: Img3,
  },
  {
    id: 4,
    name: 'Vinícius Júnior',
    text: 'Los botines Adidas, son las mas comodas para entrar al campo, si quieres ser un campeon dentro y fuera del campo, usa Adidas.',
    img: Img4,
  },
];
const Comentarios = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="container">
        {/* Encabezado */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary">
            Revisa los comentarios de los mejores deportistas del mundo.
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Comentarios
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Sigue las opiniones de nuestros deportistas más codiciados del planeta.
          </p>
        </div>

        {/* Tarjetas de testimonios */}
        <div data-aos="zoom-in">
          <Slider {...settings}>
            {ComentariosData.map((data) => (
              <div key={data.id} className="my-6">
                <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
                  <div className="mb-4">
                    <img
                      src={data.img}
                      alt=""
                      className="rounded-full w-20 h-20"
                    />
                  </div>
                  <div className="flex flex-col items-center gap-4">
                    <div className="space-y-3">
                      <p className="text-xs text-gray-500 dark:text-white">{data.text}</p>
                      <h1 className="text-xl font-bold text-black/80 dark:text-white">
                        {data.name}
                      </h1>
                    </div>
                  </div>
                  <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                    ,,
                  </p>
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

  