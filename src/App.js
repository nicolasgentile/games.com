import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <main className="main">
      <Navbar />
      <ItemListContainer />
      <Footer some = "Footer en construccion"/>
    </main>
  );
}

export default App;
