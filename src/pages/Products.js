import '../styles/Products.css';
import { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { CartContext } from '../App';

export default function Products() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get('https://api-fast-food.onrender.com/api/products/allpopular')
      .then(res => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    addToCart(product);
    // Optional: Show a confirmation message
  };

  if (loading) {
    return (
      <div className="products-container">
        <h2 className="products-title">Đang tải sản phẩm...</h2>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  return (
    <div className="products-container">
      <h2 className="products-title">Tất cả sản phẩm</h2>
      {products.length === 0 ? (
        <p>Không tìm thấy sản phẩm nào.</p>
      ) : (
        <div className="products-grid">
          {products.map(product => (
            <div key={product.id} className="product-card">
              <img 
                src={product.img} 
                alt={product.name} 
                className="product-image" 
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = 'https://via.placeholder.com/300x150?text=Product+Image';
                }} 
              />
              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-description">{product.description}</p>
                <p className="product-price">${product.price}</p>
                <div className="product-rating">
                  {'★'.repeat(Math.floor(product.stars))}
                  {'☆'.repeat(5 - Math.floor(product.stars))}
                  <span style={{ marginLeft: '4px', color: '#6b7280' }}>({product.stars})</span>
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="add-to-cart-btn"
                >
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}