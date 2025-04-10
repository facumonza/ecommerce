import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/client";


const ItemDetailContainer = () => {

    const [item, setItem] = useState(null);
    const id = useParams().id;

    useEffect(() => {

      const docRef = doc(db, "products", id);
      getDoc(docRef)
        .then((resp) => {
          setItem(
            { ...resp.data(), id: resp.id }
          );
        })

    }, [id])
    

  return (
    <div className="container mx-auto p-4">
        {item && <ItemDetail item={item} />}
    </div>
  )
}

export default ItemDetailContainer