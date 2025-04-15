import { useContext, useState } from 'react';
import { CartContext } from '../App';
import { useNavigate } from 'react-router-dom';
import '../styles/Checkout.css';

export default function Checkout() {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  
  const [shippingDetails, setShippingDetails] = useState({
    fullName: '',
    address: '',
    city: '',
    phone: '',
    email: ''
  });
  
  const handleChange = (e) => {
    setShippingDetails({
      ...shippingDetails,
      [e.target.name]: e.target.value
    });
  };

  const handleCheckout = (e) => {
    e.preventDefault();
    // Here you would typically handle the checkout process with an API
    alert('Thanh toán thành công!');
    clearCart && clearCart();
    navigate('/');
  };

  const isFormComplete = () => {
    return Object.values(shippingDetails).every(value => value.trim() !== '');
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Thanh toán</h2>
      {cart.length === 0 ? (
        <div className="checkout-empty">
          <p>Không có sản phẩm nào để thanh toán.</p>
          <button 
            onClick={() => navigate('/products')}
            className="continue-shopping-btn"
          >
            Tiếp tục mua sắm
          </button>
        </div>
      ) : (
        <div>
          <div className="checkout-summary">
            <h3 className="checkout-summary-title">Tóm tắt đơn hàng</h3>
            {cart.map((item, idx) => (
              <div key={idx} className="checkout-item">
                <span className="checkout-item-name">{item.name}</span>
                <span className="checkout-item-price">${item.price}</span>
              </div>
            ))}
            <div className="checkout-total">
              <span className="checkout-total-label">Tổng thanh toán:</span>
              <span className="checkout-total-amount">${total.toFixed(2)}</span>
            </div>
          </div>
          
          <form className="checkout-form" onSubmit={handleCheckout}>
            <h3 className="checkout-summary-title">Thông tin giao hàng</h3>
            
            <div className="form-group">
              <label className="form-label" htmlFor="fullName">Họ tên</label>
              <input
                id="fullName"
                name="fullName"
                className="form-input"
                placeholder="Nguyễn Văn A"
                value={shippingDetails.fullName}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="address">Địa chỉ</label>
              <input
                id="address"
                name="address"
                className="form-input"
                placeholder="123 Đường ABC"
                value={shippingDetails.address}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="city">Thành phố</label>
              <input
                id="city"
                name="city"
                className="form-input"
                placeholder="Hà Nội"
                value={shippingDetails.city}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="phone">Số điện thoại</label>
              <input
                id="phone"
                name="phone"
                className="form-input"
                placeholder="0123456789"
                value={shippingDetails.phone}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label className="form-label" htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                className="form-input"
                placeholder="example@example.com"
                value={shippingDetails.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <button 
              type="submit"
              className="checkout-btn"
              disabled={!isFormComplete()}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
              Hoàn tất thanh toán
            </button>
          </form>
        </div>
      )}
    </div>
  );
}