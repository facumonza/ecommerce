import React from 'react'
import { Link } from 'react-router-dom'

const Item = ( {producto} ) => {
  return (
    <div className="grid grid-cols-2 gap-4 max-h-46 shadow-md rounded-lg overflow-hidden bg-white">
        <div className='flex items-center justify-center bg-white'>
        <img src={producto.image} alt={producto.title} className="h-46 object-cover" />
        </div>
        <div className='flex flex-col p-4 bg-white'>
            <h4 className ='className="text-lg font-bold'>{producto.title}</h4>
            <div className='flex-1'>
            <p className="mt-2 text-sm text-gray-600">Precio: ${producto.price}</p>
            <p className='className="text-xs font-bold text-sky-500 text-capitalize'>Categoría: {producto.categoryId}</p>
            </div>
            <Link className="bg-blue-500 hover:bg-blue-700 text-white py-1 text-center rounded-full" to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    </div>
  )
}

export default Item