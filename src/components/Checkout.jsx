import React, { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase/client';
import { Link } from 'react-router-dom';
// materialUI import Input
import { Button, FormControl, TextField } from '@mui/material';
import Input from '@mui/material/Input';

const Checkout = () => {

    
    const [pedidoId, setPedidoId] = useState("");

    const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

    const { register, handleSubmit } = useForm();

    const comprar = (data) => {
        const pedido = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }
        console.log(pedido);

        const pedidosRef = collection(db, "pedidos");

        addDoc(pedidosRef, pedido)
            .then((doc) => {
                setPedidoId(doc.id);
                vaciarCarrito();
            })

    }

    if (pedidoId) {
        return (
            <div className="flex items-center flex-col gap-4 mt-4 shadow-md mx-auto w-1/2 p-4 bg-white rounded-lg">
                <h1 className="text-3xl font-bold">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: <span className='font-bold'>{pedidoId}</span></p>
            </div>
        )
    }

  return (
    <div className="shadow-md mx-auto w-1/2 p-4 mt-4 grid grid-cols-1 gap-4 bg-white rounded-lg">
        <h1 className="text-3xl font-bold">Finalizar compra</h1>
        
        <FormControl className="grid gap-2" component="fieldset" variant="standard">
            <TextField type="text" variant="outlined" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <TextField type="email" variant="outlined" placeholder="Ingresá tu e-mail" {...register("email")} />
            <TextField type="phone" variant="outlined" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <Button variant="contained" color="success" type="submit" onClick={handleSubmit(comprar)}>Comprar</Button>

        </FormControl>
    </div>
  )
}

export default Checkout