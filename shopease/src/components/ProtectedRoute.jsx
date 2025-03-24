import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const navigate =useNavigate();
  
  //console.log("user",user);

  useEffect(()=>{
    if(!user) {
        navigate("/login")
    }
  },[user,navigate])

  // if (!user) {
  //   navigate("/login")
  //   return null;
  //   //
  // }

  return children;
};

export default ProtectedRoute;