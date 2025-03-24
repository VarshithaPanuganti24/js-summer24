import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { CartProvider } from "./context/CartContext";
import "./index.css";
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router";
import { WishListProvider } from "./context/wishListcontext";
import { NotificationProvider } from "./context/NotificationContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  //Add the CartProvider to ensure components can use the context provided from it
  <React.StrictMode>
    
   
      <NotificationProvider>
      <WishListProvider>
      <CartProvider>
        <App />
      </CartProvider>
      </WishListProvider>
      </NotificationProvider>
    
    
  </React.StrictMode>
);
