import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './Components/NavBar';
import Footer from './Components/Footer';
import Products from './Components/Products';
import { FavoriteItemsProvider } from './Context/FavoriteItemsContext';
import HomePage from './Components/HomePage';
import FavoritesPage from './Components/FavoritesPage';



function App() {
  return (
    <FavoriteItemsProvider>
    <Router>
    <div className="App">

    <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/favourites">Favorites</Link>
          </li>
        </ul>
      </nav>
       
      <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavoritesPage />} />
          <Route path="/products" element={<Products />} />
      </Routes>

        <Navbar />
        <Footer />
      
    </div>
    </Router>
    </FavoriteItemsProvider>
  );
}

export default App;
