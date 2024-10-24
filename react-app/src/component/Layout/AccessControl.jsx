import React from "react";
import { Navigate } from "react-router-dom";

//role: "student ,"teacher", "admin", "super admin"
// requiredRoles= ["admin", "superadmin"]

export function checkAccess(role,requiredRoles)  {
    if(!requiredRoles )return true; // returns boolean
    if(!role) return false; //boolean
    return requiredRoles.includes(role); //boolean

}
    


//props ={role,requiredRole,ispage,children }
const AccessControl = (props) => {
    const requiredRoles = props.requiredRoles;
    const role = props.role;
    const children = props.children;
    const isPage = props.isPage ;
    // const { role,requiredRoles,isPage ,children } = props;

    const hasAccess = checkAccess(role, requiredRoles);

    if(!hasAccess && isPage) return <Navigate to={"/unauthorized"} replace />; // if it is a page and doent have access it redirects ,and replaces to unauthorized
    if (!hasAccess) return null; //if dont have aceess and it is a regular component  return null
    return children;  // has access is true so we are rendering the children and the children can be page or component
};

export default AccessControl;

// ["/dashboard", "/admin" => /unauthorized"(we replace the admin with unauthorized ) ]


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
//children is a component that being  wrapped around ,we dont pass the children explicityly
//children is a component that being wrapped around ,we dont pass the the children explicityly
//children is a component being  wrapped around we dont pass the children it explicityly

