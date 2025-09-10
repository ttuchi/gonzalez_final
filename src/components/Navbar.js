import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '10px', background: '#333', color: 'white' }}>
      <Link to="/" style={{ marginRight: '10px', color: 'white' }}>Home</Link>
      <Link to="/register" style={{ marginRight: '10px', color: 'white' }}>Registro</Link>
      <Link to="/login" style={{ color: 'white' }}>Login</Link>
    </nav>
  );
}

export default Navbar;
