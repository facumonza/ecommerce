import Nosotros from "./components/Nosotros";
import Contacto from "./components/Contacto";
import Navbar from "./components/Navbar";
import Carrito from "./components/Carrito";
import Checkout from "./components/Checkout";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} /> {/* muestra todo */}
            <Route path="/item/:id" element={<ItemDetailContainer />}/>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/productos/:categoria" element={<ItemListContainer />} />
            <Route path="/nosotros" element={<Nosotros />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="/carrito" element={<Carrito />}/>
            <Route path="/checkout" element={<Checkout />}/>
          </Routes>
          
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;