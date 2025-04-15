import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Register.css';

export default function Register() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
    phone: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError(''); // Clear error when user types
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const res = await axios.post('http://localhost:3030/user/register', form);
      alert('Đăng ký thành công!');
      console.log(res.data);
      
      // Redirect to login
      window.location.href = '/login';
    } catch (err) {
      setError('Đăng ký không thành công. Vui lòng thử lại.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-container">
      <form onSubmit={handleSubmit} className="register-form">
        <h2 className="register-title">Đăng ký tài khoản</h2>
        <p className="register-description">Tạo tài khoản để mua sắm dễ dàng hơn</p>
        
        {error && <div className="form-error">{error}</div>}
        
        <div className="form-grid">
          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="email">Email</label>
            <input 
              id="email"
              name="email" 
              type="email"
              placeholder="Email" 
              onChange={handleChange} 
              value={form.email}
              className="form-input" 
              required
            />
          </div>
          
          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="password">Mật khẩu</label>
            <input 
              id="password"
              name="password" 
              type="password" 
              placeholder="Mật khẩu" 
              onChange={handleChange} 
              value={form.password}
              className="form-input" 
              required
            />
            <p className="form-helper">Mật khẩu nên có ít nhất 8 ký tự</p>
          </div>
          
          <div className="form-group form-group-full">
            <label className="form-label" htmlFor="name">Họ tên</label>
            <input 
              id="name"
              name="name" 
              placeholder="Họ tên đầy đủ" 
              onChange={handleChange} 
              value={form.name}
              className="form-input" 
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="address">Địa chỉ</label>
            <input 
              id="address"
              name="address" 
              placeholder="Địa chỉ" 
              onChange={handleChange} 
              value={form.address}
              className="form-input" 
              required
            />
          </div>
          
          <div className="form-group">
            <label className="form-label" htmlFor="phone">Số điện thoại</label>
            <input 
              id="phone"
              name="phone" 
              placeholder="Số điện thoại" 
              onChange={handleChange} 
              value={form.phone}
              className="form-input" 
              required
            />
          </div>
        </div>
        
        <div className="form-checkbox-group">
          <input 
            type="checkbox" 
            id="terms" 
            name="terms" 
            className="form-checkbox" 
            required
          />
          <label htmlFor="terms" className="form-checkbox-label">
            Tôi đồng ý với <a href="#" style={{ color: '#3b82f6' }}>Điều khoản dịch vụ</a> và <a href="#" style={{ color: '#3b82f6' }}>Chính sách bảo mật</a>
          </label>
        </div>
        
        <button 
          type="submit" 
          className="register-button"
          disabled={loading}
        >
          {loading ? 'Đang đăng ký...' : 'Đăng ký'}
        </button>
        
        <div className="register-footer">
          Đã có tài khoản?{' '}
          <Link to="/login">Đăng nhập</Link>
        </div>
      </form>
    </div>
  );
}