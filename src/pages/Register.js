import { useState } from 'react';
import axios from 'axios';

export default function Register() {
  const [form, setForm] = useState({
    email: '',
    password: '',
    name: '',
    address: '',
    phone: ''
  });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3030/user/register', form);
      alert('Registration successful');
      console.log(res.data);
    } catch (err) {
      alert('Registration failed');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4">Register</h2>
      <input name="email" placeholder="Email" onChange={handleChange} className="w-full p-2 border mb-2" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="w-full p-2 border mb-2" />
      <input name="name" placeholder="Name" onChange={handleChange} className="w-full p-2 border mb-2" />
      <input name="address" placeholder="Address" onChange={handleChange} className="w-full p-2 border mb-2" />
      <input name="phone" placeholder="Phone" onChange={handleChange} className="w-full p-2 border mb-2" />
      <button className="bg-blue-500 text-white px-4 py-2">Register</button>
    </form>
  );
}
