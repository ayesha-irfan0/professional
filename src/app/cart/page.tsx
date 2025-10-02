"use client";

import { useCart } from "../../context/CartContext";

export default function CartPage() {
  const { cart, removeFromCart } = useCart(); // correct usage

  if (cart.length === 0)
    return <p className="text-center py-12">Your cart is empty.</p>;

  const total = cart.reduce(
    (acc: number, item) => acc + item.product.price * item.quantity,
    0
  );

  return (
    <div className="px-6 py-12 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.product.id}
            className="flex justify-between items-center border p-4 rounded"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.product.image}
                alt={item.product.title}
                className="w-24 h-24 object-cover rounded"
              />
              <div>
                <h3 className="font-semibold">{item.product.title}</h3>
                <p>Qty: {item.quantity}</p>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              <p className="font-bold">${item.product.price * item.quantity}</p>
              <button
                onClick={() => removeFromCart(item.product.id)}
                className="text-red-500 hover:underline"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <h2 className="text-right text-xl font-bold mt-6">Total: ${total}</h2>
    </div>
  );
}
