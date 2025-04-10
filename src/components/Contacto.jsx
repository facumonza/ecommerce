import { useForm } from "react-hook-form";
import React, { useContext, useState } from 'react'
// materialUI import Input
import { Button, FormControl, TextField } from '@mui/material';

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
        console.log(data);
    }

  return (
    <div className="shadow-md mx-auto w-1/2 p-4 mt-4 grid grid-cols-1 gap-4 bg-white rounded-lg">
        <h1 className="text-3xl font-bold">Contacto</h1>
        
        <FormControl className="grid gap-2" component="fieldset" variant="standard">
            <TextField type="text" variant="outlined" placeholder="Ingresá tu nombre" {...register("nombre")} />
            <TextField type="email" variant="outlined" placeholder="Ingresá tu e-mail" {...register("email")} />
            <TextField type="phone" variant="outlined" placeholder="Ingresá tu teléfono" {...register("telefono")} />

            <Button variant="contained" color="success" type="submit">Enviar</Button>

        </FormControl>
    </div>
  )
}

export default Contacto