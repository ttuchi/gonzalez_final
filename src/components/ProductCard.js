import { Link } from 'react-router-dom';

function ProductCard({ book }) {
  return (
    <div className="product-card">
      <img src={book.imagen} alt={book.name} style={{ width: '150px', height: 'auto' }} />
      <h3>{book.name}</h3>
      <p>Precio: ${book.price}</p>
      <p>Stock: {book.stock}</p>
      <Link to={`/product/${book.id}`}>Ver detalle</Link>
    </div>
  );
}

export default ProductCard;

