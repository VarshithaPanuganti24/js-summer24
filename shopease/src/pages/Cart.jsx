import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, updateCartItemQuantity,total } = useCart();
  //const [total, setTotal] =useState(0);

  // useEffect(() => {
  //   const newtotal= cart.reduce(
  //     (itemTotal, item) => itemTotal + item.price * item.quantity,
  //     0
  //   );
  //   setTotal(newtotal.toFixed(2));
  // },[cart]);
  

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-6">Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>
          Your cart is empty
          <Link to="/products" className="text-blue-500 underline">Continue Shopping</Link>
        </p>
      ) : (
        <div>
          <ul className="space-y-4">
            {cart.map((item) => {
              return (
                <li key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <span className="font-semibold text-lg">{item.title}</span>
                  <span className="text-gray-500 text-sm"></span>
                  <div className="flex items-center gap-4">
                    <button 
                    className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                    onClick={() => updateCartItemQuantity(item.id,item.quantity -1)}>
                      -
                    </button>
                    <input type="text" value={item.quantity} readOnly style={{ width: "30px", textAlign: "center", margin: "0 5px" }} />
                    <button 
                    className="bg-gray-300 text-black px-2 py-1 rounded hover:bg-gray-400"
                    onClick={() => updateCartItemQuantity(item.id,item.quantity +1)}>
                      +
                    </button>
                    
                    <span className="text-xl font-semibold">${item.price * item.quantity}</span>
                    <button
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      <h2  className="text-xl font-semibold">Total: ${total}</h2>


      <Link to="/checkout" className="btn-primary mt-4 block text-center">
        Proceed to checkout
      </Link>
    </div>
  );
};

export default Cart;
