import { useContext } from 'react';
import { CartContext } from '../App';

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCheckout = () => {
    alert('Thanh toán thành công!');
    window.location.href = '/';
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Thanh toán</h2>
      {cart.length === 0 ? (
        <p>Không có sản phẩm nào để thanh toán.</p>
      ) : (
        <div>
          {cart.map((item, idx) => (
            <div key={idx} className="border-b py-2">
              <p>{item.name} - ${item.price}</p>
            </div>
          ))}
          <p className="mt-4 font-bold">Tổng cộng: ${total.toFixed(2)}</p>
          <button onClick={handleCheckout} className="bg-green-500 text-white px-4 py-2 mt-4">
            Thanh toán
          </button>
        </div>
      )}
    </div>
  );
}