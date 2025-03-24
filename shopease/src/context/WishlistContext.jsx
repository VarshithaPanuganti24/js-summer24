import React, { createContext, useContext, useState, useEffect } from "react";
import { useNotification } from "./NotificationContext";

const WishlistContext = createContext();

export const WishListProvider = ({ children }) => {
  const [wishlist, setWishList] = useState(() => {
    const storedWishlist = localStorage.getItem("wishlist");
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  });
  const{addNotification}= useNotification();

  //todo:add to wishlist
  //remove wishlist
  // useEffect(()=>{
  //     localStorage.setItem("wishlist",JSON.stringify(wishlist));

  //   },[wishlist]);

  const addToWishList = (product) => {
    const newWishList = wishlist.find((item) => item.id === product.id)
      ? wishlist
      : [...wishlist, product];
    setWishList(newWishList);
    localStorage.setItem("wishlist", JSON.stringify(newWishList));
  };

  const removeFromWishList = (id) => {
    const newWishList = wishlist.filter((item) => item.id !== id);
    

    setWishList(newWishList);
    localStorage.setItem("wishlist", JSON.stringify(newWishList));
    addNotification('Item removed from wishlist',"success");
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishList, removeFromWishList }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);
