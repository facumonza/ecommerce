import Item from "./Item";

const ItemList = ( {productos, titulo} ) => {

  return (
    <div className="container mx-auto p-4">
        <h2 className="main-title text-capitalize">{titulo}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            { productos.map((prod) => <Item producto={prod} key={prod.id} />) }
        </div>
    </div>
  )
}

export default ItemList