import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center bg-white shadow-md p-4">
     <div className="text-lg font-bold text-blue-600">ShopEase</div>
      <div className=" flex space-x-4 text-blue-500 ">
       <Link to="/" className= "hover:text-blue-500">Home</Link>
        <Link to="/products" className="hover:text-blue-500">Products</Link>
        <Link to="/cart" className= "hover:text-blue-500">Cart</Link>
        <Link to="/login" className= "hover:text-blue-500">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
