import React from "react";
import Unauthorized from "../../pages/Unauthorised";
import { Navigate } from "react-router-dom";

//role: "student ,"teacher", "admin", "super admin"
// requiredRoles= ["admin", "superadmin"]

function hasAccess(requiredRoles,role)  {
    if(!requiredRoles ||requiredRoles.length === 0){
        return true;

    }
    return requiredRoles.includes(role);
};
const AccessControl = (props) => {
    const requiredRoles = props.requiredRoles;
    const role = props.role;
    const children = props.children;
    const type = props.type ;

    if(!hasAccess(requiredRoles,role)){
        if(type === "page"){
            return < Navigate to="/unauthorized" replace />;
        }else {
            return null;
        }
    }
    
    return children;
};

// const default ={
//     requiredRoles:["admin" ,"superadmin"],
//     role:"guest"
// };

AccessControl.def

export default AccessControl;
///

//whether children is page or component

// You need to create the AccessControl component to be reusable with different sets of permissions.

// Create several components in the "home" page then wrap the AccessControl component around it. Give the component different sets of required roles and a different role to test if the component renders given the right/wrong role.

// AccessControl should be a generic component like AuthCannotAccess and should be reusable.

//a react component and a javascript function
//a component returing a jsx a there is a 

//children is a component that being wrapped around , we dont pass the children  explicityly
//children is a component that being wrapeed around  ,we dont pass the children explicityly
//children is a component that being  wrapped around ,we dont pass the children explicityly
//children is a component being wrapped around ,we dont pass the the children explicityly
//children is  a component being  wrapped around we dont pass the children it explicityly

