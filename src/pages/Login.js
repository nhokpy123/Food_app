import { useState } from 'react';
import axios from 'axios';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3030/user/login', form);
      alert('Login successful');
      console.log(res.data);
      // Lưu token vào localStorage nếu có: localStorage.setItem('token', res.data.token);
    } catch (err) {
      alert('Login failed');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border mb-2" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border mb-2" />
      <button className="bg-green-500 text-white px-4 py-2">Login</button>
    </form>
  );
}