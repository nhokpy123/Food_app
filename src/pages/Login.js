import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
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
      const res = await axios.post('https://api-fast-food.onrender.com/api/users/login', form);
      alert('Đăng nhập thành công!');
      console.log(res.data);
      // Lưu token vào localStorage nếu có: localStorage.setItem('token', res.data.token);
      
      // Redirect to home or dashboard
      window.location.href = '/';
    } catch (err) {
      setError('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập của bạn.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2 className="login-title">Đăng nhập</h2>
        <p className="login-description">Chào mừng bạn quay trở lại!</p>
        
        {error && <div className="form-error">{error}</div>}
        
        <div className="form-group">
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
        
        <div className="form-group">
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
        </div>
        
        <button 
          type="submit" 
          className="login-button"
          disabled={loading}
        >
          {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
        </button>
        
        <div className="login-divider">
          <span className="login-divider-text">hoặc</span>
        </div>
        
        <div className="login-footer">
          Chưa có tài khoản?{' '}
          <Link to="/register">Đăng ký ngay</Link>
        </div>
      </form>
    </div>
  );
}