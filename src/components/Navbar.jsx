import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/website/The-Trefoil-adidas-logo-1.jpg.jpeg";
import { IoMdSearch } from 'react-icons/io';
import { FaCartShopping } from 'react-icons/fa6';
import DarkMode from './DarkMode';

const Menu = [
  {
    id: 1,
    name: "Inicio",
    link: "#",
  },
  {
    id: 2,
    name: "Caballero",
    link: "/#Caballero",
  },
  {
    id: 3,
    name: "Dama",
    link:"#Dama", 
  },
  {
    id: 4,
    name: "Niños",
    link:"#kids",
  },
  {
    id: 5,
    name: "Registro",
    link: "#Registro"
  }
];

const Navbar = () => {
  return (
    <div className='shadow-md bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
      {/* upper Navbar */}
      <div className='bg-white py-2 dark:bg-black'>
        <div className='container flex justify-between items-center'>
            <div>
                <a href="" className='font-bold text-2xl sm:text-3xl flex gap-2 text-black dark:text-white'>
                    <img src={logo} alt="logo" className='w-20'/>
                    Adidas
                </a>
            </div>
            {/* Barra de navegacion */}
              <div className='flex justify-between items-center gap-4'>
              <div className='relative group hidden sm:block'>
                    <input type="text" placeholder='Buscar' className='w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300 rounded-full border bg-gray-800 border-gray-300 px-2 py-1 focus:outline-none focus:border-1 focus:border-primary dark:border-gray-500 text-white dark:bg-white dark:text-black'/>
                     <IoMdSearch className='text-white dark:text-black group-hover:text-primary absolute top-1/2 -translate-y-1/2 right-3'/>                        
                </div>
                {/* boton orden */}
                    <button className='bg-gradient-to-r from-primary to-secundary transition-all duration-200 text-white py-1 px-4 rounded-full flex items-center gap-3 group'>
                      <span className='group-hover:block hidden transition-all-200'>orden</span>
                      <Link to="/carrito">
                        <FaCartShopping className='text-xl text-white drop-shadow-sm cursor-pointer'/>
                      </Link>
                    </button>
                {/* DarKode Swicht */}
                <div>
                  <DarkMode />
                </div>
              </div>
                
        </div>
      </div>
      {/* lower Navbar */}
      <div className='flex justify-center'>
        <ul className='sm:flex hidden items-center gap-4'>
          {
            Menu.map((data)=>(
              <li key={data.id}>
                <a href={data.link} className='inline-block px-4 hover:text-primary duration-200'>{data.name}</a>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Navbar;
