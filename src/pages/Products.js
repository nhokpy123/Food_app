import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../App';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    axios.get('http://localhost:3030/api/products/allpopular')
      .then(res => setProducts(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">All Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.img} alt={product.name} className="h-40 w-full object-cover" />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p>{product.description}</p>
            <p className="text-green-600 font-semibold">${product.price}</p>
            <p>⭐ {product.stars}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 mt-2"
            >
              Thêm vào giỏ hàng
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}