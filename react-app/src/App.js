import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages";
import React from "react";
import PublicRoutes from "./component/Layout/PublicRoutes";
import Unauthorized from "./pages/Unauthorised";
import Login from "./pages/public/auth/Login";
import Register from "./pages/public/auth/Register";
//import LoginFormB from "./pages/public/auth/Login/LoginFormB";
import PrivateRoutes from "./component/Layout/PrivateRoutes";
import Dashboard from "./pages/private/Dashboard";
import Admin from "./pages/private/Admin";
import SuperAdmin from "./pages/private/SuperAdmin";
import AuthCannotAccess from "./component/Layout/AuthCannotAccess";

function App() {
   return (
      <Routes>
         {/* Public Routes */}
         <Route path="/" element={<PublicRoutes />}>

            <Route index element={<Home />} />
            <Route path="login" element={<AuthCannotAccess><Login /></AuthCannotAccess>} />
            <Route path="register" element={<AuthCannotAccess><Register /></AuthCannotAccess>} />
            <Route path="unauthorized" element={<Unauthorized />} />
         </Route>

         {/* Private Routes */}
         <Route element={<PrivateRoutes />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/super-admin" element={<SuperAdmin />} />

         </Route>

      </Routes>
   );
}

export default App;

//write a wrapper that allows the l
