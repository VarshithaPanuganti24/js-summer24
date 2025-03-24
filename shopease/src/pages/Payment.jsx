import React, { useState, useEffect } from "react";

import { useNavigate } from "react-router";

import { useCart } from "../context/CartContext";

const Payment = () => {
  const { cart } = useCart();
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCVV] = useState("");

  const [paymentstatus, setpaymentstatus] = useState(null);
  const navigate = useNavigate();

  const handlePayment = (e) => {
    e.preventDefault();
    console.log("we are here");
    if (cardNumber.length !== 16 || cvv.length !== 3) {
      setpaymentstatus("error");
      return;
    }
    setpaymentstatus("success");
    const orderId = Math.floor(Math.random() * 100000);
    localStorage.setItem("orderId", orderId);
    console.log(orderId);

    setTimeout(() => {
      navigate(`/order-tracking/${orderId}`);
    }, 2000);
  };
  // useEffect(() => {
  //     if (cart.length < 1) {
  //       navigate("/products");
  //     }
  //   },[cart]);
  //   if (cart.length < 1) {
  //     return null;
  //   }

  return (
    <div className="p-6 maw-w-lg mx-auto">
      <h1 className="text-3xl font-bold mb-4">Payment</h1>
      {paymentstatus === "success" && <p>Payment was successful</p>}
      {paymentstatus === "error" && <p>Error for payment</p>}

      <form onSubmit={handlePayment}>
        <input
          type="text"
          placeholder="Card Number"
          required
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <input
          type="text"
          placeholder="CVV"
          required
          value={cvv}
          onChange={(e) => setCVV(e.target.value)}
          className="border p-2 mb-2 w-full"
        />
        <button type="submit" className="btn-primary w-full">
          Submit Payment
        </button>
      </form>
    </div>
  );
};

export default Payment;
