import React, { useState } from 'react';

const Carrito = ({ productos }) => {
  const [carritoProductos, setCarritoProductos] = useState(productos || []);

  // Función para quitar un producto del carrito
  const quitarProducto = (index) => {
    const nuevosProductos = [...carritoProductos];
    nuevosProductos.splice(index, 1);
    setCarritoProductos(nuevosProductos);
  };

  // Función para calcular el total del carrito
  const calcularTotal = () => {
    return carritoProductos.reduce((total, producto) => total + producto.precio, 0);
  };

  return (
    <div>
      <h2>Carrito</h2>
      {carritoProductos.length === 0 ? (
        <p>El carrito está vacío.</p>
      ) : (
        <div>
          <ul>
            {carritoProductos.map((producto, index) => (
              <li key={index}>
                {producto.nombre} - ${producto.precio}
                <button onClick={() => quitarProducto(index)}>Quitar</button>
              </li>
            ))}
          </ul>
          <p>Total: ${calcularTotal()}</p>
        </div>
      )}
    </div>
  );
};

export default Carrito;
