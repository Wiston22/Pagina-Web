import React from 'react'
import Banner from "../assets/website/bannerRegistro.jpg";


const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  const Registro = () => {
    const bannerImgStyle = {
      backgroundImage: `url(${Banner})`,
    };
  
    return (
      <div
        data-aos="zoom-in"
        className="mb-20 bg-gray-100 dark:bg-gray-800 text-white registro-banner"
        style={bannerImgStyle}
      >
        <div className="container backdrop-blur-sm py-10">
          <div className="space-y-6 max-w-xl mx-auto">
            <h1 className="text-2xl !text-center sm:text-left sm:text-4xl font-semibold">
              Reciba notificaciones sobre nuevos productos
            </h1>
            <label htmlFor="email" className="block text-white">
              Email:
              <input
                data-aos="fade-up"
                type="text"
                id="email"
                placeholder="Email"
                className="w-full p-3"
              />
            </label>
          </div>
        </div>
      </div>
    );
  };
  
  
export default Registro
