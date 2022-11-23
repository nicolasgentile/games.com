import './styles/App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';

const App = () => {
  return (
    <main className="main">
      <Navbar />
      <ItemListContainer greeting = "Sitio en construccion"/>
    </main>
  );
}

export default App;
