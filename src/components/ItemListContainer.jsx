import { useEffect, useState } from "react";
import ItemList from "./ItemList"; // Asegúrate de que esta ruta sea correcta
import { useParams } from "react-router-dom"; // Asegúrate de que el Router esté configurado correctamente
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/client"; // Verifica esta inicialización de db

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos
  const [titulo, setTitulo] = useState("Productos"); // Estado para el título de la sección
  const [loading, setLoading] = useState(true); // Estado para indicar si se está cargando
  const [error, setError] = useState(null); // Estado para almacenar posibles errores

  const { categoria } = useParams(); // Obtiene el parámetro 'categoria' de la URL

  // Efecto para actualizar el título basado en la categoría
  useEffect(() => {
    setTitulo(categoria ? `Categoría: ${categoria}` : "Todos los Productos");
  }, [categoria]); // Se ejecuta cuando 'categoria' cambia

  // Efecto para obtener los productos desde Firestore
  useEffect(() => {
    setLoading(true); // Inicia la carga
    setError(null); // Reinicia el error en cada nueva búsqueda
    console.log("Buscando productos para la categoría:", categoria || "Todas"); // Registra la categoría que se está buscando

    const productosRef = collection(db, "products"); // Referencia a la colección 'productos'

    // Crea la consulta: filtra por 'categoria' si existe, de lo contrario obtiene todos los productos
    // IMPORTANTE: Asegúrate de que el campo 'categoria' exista en tus documentos de Firestore y coincida exactamente con el parámetro de la URL (sensible a mayúsculas/minúsculas)
    const q = categoria
      ? query(productosRef, where("categoryId", "==", categoria))
      : productosRef;

    // Ejecuta la consulta para obtener los documentos
    getDocs(q)
      .then((resp) => {
        // Verifica si la respuesta está vacía
        if (resp.empty) {
          console.log("No se encontraron documentos para esta consulta.");
        }

        // Mapea los documentos al formato deseado (objeto con datos e id)
        const fetchedProductos = resp.docs.map((doc) => {
          // Descomenta para registrar los datos y el ID de cada documento para verificación
          // console.log("ID Doc:", doc.id, "Data:", doc.data());
          return { ...doc.data(), id: doc.id };
        });

        console.log("Productos obtenidos:", fetchedProductos); // Registra el array de productos obtenidos
        setProductos(fetchedProductos); // Actualiza el estado con los productos obtenidos
      })
      .catch((err) => {
        // Captura y registra cualquier error durante la operación de búsqueda
        console.error("Error al obtener productos:", err);
        setError("Error al cargar los productos. Intenta de nuevo más tarde."); // Establece un mensaje de error para el usuario
      })
      .finally(() => {
        setLoading(false); // Detiene la carga independientemente del éxito o error
      });

  }, [categoria]); // Vuelve a ejecutar este efecto si el parámetro 'categoria' cambia

  // Registra el estado *después* de posibles actualizaciones (registrará el estado inicial y luego el estado actualizado)
  console.log("Estado actual de productos:", productos);

  // Renderizado condicional basado en los estados de carga y error
  if (loading) {
    return <div>Cargando productos...</div>; // Muestra un indicador de carga
  }

  if (error) {
    return <div>Error: {error}</div>; // Muestra un mensaje de error
  }

  // Renderiza el componente ItemList con los productos obtenidos y el título
  return (
    <div className="container mx-auto">
      {/* Asegúrate de que ItemList pueda manejar un array de productos vacío sin problemas */}
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};

export default ItemListContainer;
