import { Link } from 'react-router-dom';
import books from '../data/books';

const Home = () => {
  return (
    <div className="container">
      <h1>Listado de Libros</h1>
      <div className="products">
        {books.map((book) => (
          <div key={book.id} className="product-card">
            <img src={book.imagen} alt={book.name} className="producto-img" style={{ width: '150px', height: 'auto' }} />
            <h3>{book.name}</h3>
            <p>Precio: ${book.price}</p>
            <p>Stock: {book.stock}</p>
            <Link to={`/product/${book.id}`}>Ver detalle</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;