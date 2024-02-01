import React from 'react';
import Banner from "../../assets/website/Banner.jpg";

const Carrusel = () => {
    return (
        <div>
            <div
                style={{
                    height: '50vh',
                    background: `url(${Banner}) no-repeat center center`,
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff', // Color del texto, ajusta según sea necesario
                    textAlign: 'center',
                }}
            >
            </div>
        </div>
    );
};

export default Carrusel;
