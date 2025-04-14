import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="p-4 shadow-md flex gap-4">
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/checkout">Checkout</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
    </nav>
  );
}