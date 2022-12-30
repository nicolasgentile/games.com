import './styles/App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Footer from './components/Footer';
import Cart from './components/Cart';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartContextProvider from './components/CartContext';

const App = () => {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path = '/' element = {<ItemListContainer />} />
          <Route path = '/category/:consoleId' element = {<ItemListContainer />} />
          <Route path = '/detail/:itemId' element = {<ItemDetailContainer />} />
          <Route path = '/cart' element = {<Cart />} />
        </Routes>
        <Footer some = 'Footer en construccion' />
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
