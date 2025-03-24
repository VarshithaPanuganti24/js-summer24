import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
  };
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="w-full flex justify-end space-x-4">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          ShopEase
        </Link>

        <ul className="w-full flex justify-end space-x-4">
          <li>
            <Link to="/" className="text-blue-500">
              {" "}
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/products" className="text-blue-500">
              {" "}
              Products
            </Link>
          </li>

          {user ? (
            <>
              <li>
                <Link
                  to="/dashboard"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  to="/profile"
                  className="text-gray-700 hover:text-blue-500"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/cart" className="text-blue-500">
                  {" "}
                  Cart
                </Link>
              </li>
              <li>
                <Link to="/wishlist" className="text-blue-500">
                  {" "}
                  WishList
                </Link>
              </li>
              <li>
                <Link to="/order-tracking/:orderId" className="text-blue-500">
                  {" "}
                  OrderTracking
                </Link>
              </li>
              <li>
                <button onClick={handleLogout} className=" text-red-500">
                  Logout
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="text-gray-700 hover:text-blue-500">
                  {" "}
                  Login
                </Link>
              </li>

              <li>
                <Link to="/signup" className="text-blue-500">
                  Signup
                </Link>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
