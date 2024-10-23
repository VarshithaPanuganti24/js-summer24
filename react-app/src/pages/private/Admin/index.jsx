import React from "react";

import AccessControl from "../../../component/Layout/AccessControl";


const requiredRoles = ["admin","super-admin"];
const role = "admin";
//const role = "admin";
const Admin = () => {

  return (

     <AccessControl requiredRoles={requiredRoles}  role={role} type="page">
      {<Admin />}
    </AccessControl>
  );
};

export default Admin;
