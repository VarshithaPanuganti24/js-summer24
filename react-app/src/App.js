import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import React from "react";
import PublicRoutes from "./component/Layout/PublicRoutes";
import Unauthorized from "./pages/Unauthorised";
import Login from "./pages/public/auth/Login";
import Register from "./pages/public/auth/Register";
import LoginFormB from "./pages/public/auth/Login/LoginFormB";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicRoutes />}>
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="unauthorized" element={<Unauthorized />} />
      </Route>

      {/* Private Routes */}
      {/* <Route></Route> */} 
    </Routes>
  );
}

export default App;
