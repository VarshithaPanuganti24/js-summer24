import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import OrderTracking from "./pages/OrderTracking";
import { AuthProvider } from "./context/AuthContext";
import WishList from "./pages/Wishlist";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import { Provider } from "react-redux";
import {store } from "./redux/store";


function App() {
  return (
    <Router >
      <Provider store={store} >
      <AuthProvider>
        <Header />
        <Navbar />
        <div className="min-h-screen p-4">
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<ProductDetails />} />

            
            {/* Proted Routes */}

            {/* <Route element={<ProtectedRoute />} > */}
            <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
            <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
            <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
            <Route path="/payment" element={<ProtectedRoute><Payment /></ProtectedRoute>} />
            <Route
              path="/order-tracking/:orderId"
              element={<ProtectedRoute><OrderTracking /></ProtectedRoute>}
            />

            <Route path="/wishlist" element={<ProtectedRoute><WishList /></ProtectedRoute>} />
          </Routes>
        </div>

        <Footer />
      </AuthProvider>
      </Provider>
    </Router>
  );
}

export default App;
