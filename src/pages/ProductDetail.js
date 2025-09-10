import { useParams } from 'react-router-dom';
import books from '../data/books';

function ProductDetail() {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) return <h2>Producto no encontrado</h2>;

  return (
    <div style={{ padding: '20px' }}>
      <img src={book.imagen} alt={book.name} style={{ width: '200px', height: 'auto', marginBottom: '20px' }} />
      <h2>{book.name}</h2>
      <p><strong>Precio:</strong> ${book.price}</p>
      <p><strong>Stock:</strong> {book.stock}</p>
      <p><strong>Código:</strong> {book.code}</p>
    </div>
  );
}

export default ProductDetail;
