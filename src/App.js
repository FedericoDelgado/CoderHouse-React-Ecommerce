import { Navigate, Route, Routes } from "react-router-dom";
import Contacto from "./pages/Contacto";
import Footer from "./components/Footer";
import Home from './pages/Home'
import ItemDetailContainer from './pages/ItemDetailContainer';
import ItemListContainer from './pages/ItemListContainer';
import NavBar from './components/NavBar';
import Nosotros from "./pages/Nosotros";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";


function App() {
  return (
    <div className='cuerpo'>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/inicio" element={<Home/>}></Route>
          <Route path="/productos" element={<ItemListContainer />}></Route>
          <Route path="/nosotros" element={<Nosotros/>}></Route>
          <Route path="/contacto" element={<Contacto/>}></Route>
          <Route path="/producto/:productName" element={<ItemDetailContainer />}></Route>
          <Route path="/categoria/:category" element={<ItemListContainer />}></Route>
          <Route path="/notFound" element={<NotFound />} />
          <Route path="*" element={<Navigate replace to="/notFound"/>} />
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>

        <Footer />
    </div> 
  );
}

export default App;