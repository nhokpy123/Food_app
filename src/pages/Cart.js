import { useContext } from 'react';
import { CartContext } from '../App';

export default function Cart() {
  const { cart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Giỏ hàng</h2>
      {cart.length === 0 ? (
        <p>Chưa có sản phẩm nào trong giỏ hàng.</p>
      ) : (
        <div>
          {cart.map((item, idx) => (
            <div key={idx} className="border-b py-2">
              <p className="font-semibold">{item.name}</p>
              <p>${item.price}</p>
            </div>
          ))}
          <p className="mt-4 font-bold">Tổng cộng: ${total.toFixed(2)}</p>
        </div>
      )}
    </div>
  );
}