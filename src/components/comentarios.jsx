import React from 'react';
import Slider from 'react-slick';
import Img1 from '../assets/Caballero/zapato3.jpg';
import Img2 from '../assets/Caballero/zapato3.jpg';
import Img3 from '../assets/Caballero/zapato3.jpg';
import Img4 from '../assets/Caballero/zapato3.jpg';

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
console.log(TestimonialData);

const Comentarios = () => {
  console.log("Entró a Comentarios");

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'linear',
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
        <div>
          <img src={TestimonialData[0].img} alt="" />
        </div>

        {/* Testimonial cards */}
    
        <div data-aos="zoom-in">

          <div>
          {console.log(TestimonialData[0].img,"jer")}
          </div>

            <Slider {...settings}>
            {TestimonialData.map((data) => (
              <div key={data.id} className="my-6">
              <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative">
            <div className="mb-4">
            <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
            
            Agrega el siguiente console.log para imprimir la ruta de la imagen
            {console.log("Ruta de la IMG:", data.img.Img1)}
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="space-y-3">
              <p className="text-xs text-gray-500">{data.text}</p>
              <h1 className="text-xl font-bold text-black/80 dark:text-light">{data.name}</h1>
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
