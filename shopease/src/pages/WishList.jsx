import React from "react";
import { useWishlist } from "../context/wishListcontext";
import { Link } from "react-router";

const WishList = () => {
    const { wishlist,  removeFromWishList } = useWishlist();

  return (
    <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">WishList</h1>
        {wishlist.length === 0 ?(
            <p>
            Your cart is empty
            <Link to="/products" className="text-blue-500 underline">Continue Shopping</Link>
          </p>

        ):(
        <div>
            <ul className="space-y-4">
            {wishlist.map((item) => {
              return (
                <li key={item.id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow-md">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-md mr-4"
                  />
                  <span className="font-semibold text-lg">{item.title}</span>
                
                    <div className="flex items-center gap-4">
                   
                        <button
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            onClick={() => removeFromWishList(item.id)}
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
    </div>
  )
  
};

export default WishList;
