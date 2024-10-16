import React, { useContext } from "react";


import { AuthContext } from "../../contexts/AuthProvider";
import { Navigate } from "react-router-dom";


const AuthCannotAccess = ({children}) => {
    const { user } = useContext(AuthContext);
    if (user) {
        return <Navigate to ="/dashboard" replace />
    }
    return children;

    
};

export default AuthCannotAccess;

//when login we need to redirect link the /logic to AuthCannotAccess
//where the Auth login checks if user is login in or not if not logged in login abd register
//