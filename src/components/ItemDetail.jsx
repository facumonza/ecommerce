
import { useContext, useState } from "react";
import ItemCount from "./ItemCount"
import { CartContext } from "../context/CartContext";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';



const ItemDetail = ({ item }) => {

  const { carrito, agregarAlCarrito } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1)
  }

  return (
    <Card sx={{ maxWidth: "100%", maxHeight: "100vh", margin: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <CardMedia className="h-auto w-full"
            component="img"
            image={item.image}
            alt={item.title}
          />
        </Grid>
        <Grid item xs={8}>
          <CardContent width={"30%"}>
            <Typography variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
            <Typography variant="body1" color="text.primary">
              Precio: ${item.price}
            </Typography>
          </CardContent>
          <ItemCount
            cantidad={cantidad}
            handleSumar={handleSumar}
            handleRestar={handleRestar}
            handleAgregar={() => { agregarAlCarrito(item, cantidad) }}
          />
        </Grid>
      </Grid>
    </Card>

  )
}

export default ItemDetail
