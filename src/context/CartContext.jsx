import { createContext, useEffect, useState } from "react";
import { db } from '../../firebase/client';
import { collection, getDocs } from "firebase/firestore";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({children}) => {

    const [carrito, setCarrito] = useState(carritoInicial);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        const obtenerCategorias = async () => {
          // Obtenerc categorias de la columna categoryId de firestore
       try {
        const querySnapshot = await getDocs(collection(db, "products"));
        const categoriesData = querySnapshot.docs.map(doc => doc.data().categoryId);
        const uniqueCategories = Array.from(new Set(categoriesData));
        setCategorias(uniqueCategories);
        // setLoading(false);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setLoading(false);
      } 
    };
        obtenerCategorias();
      }, []);

    const agregarAlCarrito = (item, cantidad) => {
        const itemAgregado = { ...item, cantidad };

        const nuevoCarrito = [...carrito];
        const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);

        if (estaEnElCarrito) {
            estaEnElCarrito.cantidad += cantidad;
        } else {
            nuevoCarrito.push(itemAgregado);
        }
        setCarrito(nuevoCarrito);
    }

    const cantidadEnCarrito = () => {
        return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    }

    const precioTotal = () => {
        return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
    }

    const vaciarCarrito = () => {
        setCarrito([]);
    }

    useEffect(() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])
    

    return (
        <CartContext.Provider value={ {
            carrito,
            agregarAlCarrito,
            cantidadEnCarrito,
            precioTotal,
            vaciarCarrito,
            categorias,
        } }>
            {children}
        </CartContext.Provider>
    )



}
