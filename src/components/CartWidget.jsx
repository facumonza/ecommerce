import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {

    const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div className="flex items-center">
      <Link className="menu-link" to="/carrito">
    <ShoppingCartIcon className="text-blue-500" />
    <span className="text-white -ml-4">{cantidadEnCarrito()}</span>
  </Link>
  </div>
  )
}

export default CartWidget