import React from "react";
import {usecart} from "../context/CartContext";
const Cart =() => {
    const {Cart} = usecart();
    return <div>
        <h1> Shopping Cart</h1>

        <p>
            Your cart is empty
            <Link to="/products">Continue Shopping</Link>
        </p>
    </div>
}