import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import ProductDetail from './pages/ProductDetail';
import './App.css';

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Registro</Link>
        <Link to="/login">Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
      </Routes>

      <footer>
        <p>© 2025 Ecommerce Books - Todos los derechos reservados</p>
      </footer>
    </>
  );
}

export default App;
