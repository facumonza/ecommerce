import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import ItemDetail from './ItemDetail';
import ItemCount from './ItemCount';

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    function formatNumber(num) {
        // Formatear el número con separadores de miles y 2 decimales
        const thousands = num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        const decimal = num.toString().split('.')[1];
        const formattedDecimal = decimal ? `.${decimal.slice(0, 2)}` : '.00';
        //add currency symbol
        const currencySymbol = '$ ';        
        return `${currencySymbol}${thousands}${formattedDecimal}`;
    }

  return (
    <div className="container">
        <h1 className="text-3xl font-bold ml-4">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id} className='grid grid-cols-2 m-4 rounded-lg overflow-hidden w-full shadow'>
                    <div className='bg-whitesomke'>
                        <img src={prod.image} alt={prod.titulo} />
                    </div>
                    <div className='bg-lightblue-50 p-4'>
                    <h3 className='text-lg font-bold'>{prod.title}</h3>
                    <span className='text-right text-black-600'>ID: {prod.id}
                    <p>Precio unit: {formatNumber(prod.price)}</p>
                    <p>Precio total: {formatNumber(prod.price * prod.cantidad)}</p>
                    <p>Cant: {prod.cantidad}</p>
                    </span>
                    </div>
                </div>
            ))
        }

        {  
            carrito.length > 0 ?
            <div className='flex flex-col gap-4 items-end shadow bg-gray-200 p-4 w-full mx-auto'>
                <h2>Precio total: {formatNumber(precioTotal())}</h2>
                <Link to="/checkout">
                <Button variant='contained' color='success' >
                Finalizar compra
                </Button>
                </Link>
                <Button onClick={handleVaciar} variant='contained' size='small' color='error' >Vaciar</Button>
            </div> :
            <h2>El carrito está vacío :(</h2>
        }
        
    </div>
  )
}

export default Carrito
