import { useContext } from 'react';
import { CartContext } from '../App';
import { Link } from 'react-router-dom';
import '../styles/Cart.css';

export default function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-container">
      <h2 className="cart-title">Giỏ hàng</h2>
      {cart.length === 0 ? (
        <div className="empty-cart-message">
          <p>Chưa có sản phẩm nào trong giỏ hàng.</p>
          <Link to="/products" className="continue-shopping-btn">
            Tiếp tục mua sắm
          </Link>
        </div>
      ) : (
        <div>
          <div className="cart-items">
            {cart.map((item, idx) => (
              <div key={idx} className="cart-item">
                <div className="cart-item-details">
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">${item.price}</p>
                </div>
                {removeFromCart && (
                  <button 
                    onClick={() => removeFromCart(idx)}
                    className="remove-item-btn"
                    aria-label="Remove item"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                )}
              </div>
            ))}
          </div>
          <div className="cart-total">
            <p className="cart-total-amount">Tổng cộng: ${total.toFixed(2)}</p>
          </div>
          <div className="cart-buttons">
            <Link to="/products" className="continue-shopping-btn">
              Tiếp tục mua sắm
            </Link>
            <Link to="/checkout" className="checkout-btn">
              Thanh toán
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}