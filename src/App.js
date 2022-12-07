import './styles/App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:consoleId' element={<ItemListContainer />} />
        <Route path='/detail/:itemId' element={<ItemDetailContainer />} />
      </Routes>
      <Footer some = "Footer en construccion"/>
    </BrowserRouter>
  );
}

export default App;
