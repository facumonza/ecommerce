import React from 'react'
import Button from '@mui/material/Button';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';

const ItemCount = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

  return (
    <div>

      <div className="flex items-center flex-col w-60 gap-4">
        <div>
          <Button onClick={handleRestar} variant="contained" size='small'><RemoveIcon /></Button>
          <TextField id="outlined-basic" label="Cantidad" variant="outlined" size='small' value={cantidad} className='w-20' />
          <Button onClick={handleSumar} variant='contained' size='small'><AddIcon /></Button>
        </div>
        <Button variant='contained' onClick={handleAgregar}>Agregar al carrito</Button>
      </div>
    </div>
  )
}

export default ItemCount