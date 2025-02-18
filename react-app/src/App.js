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
import AccessControl from "./component/Layout/AccessControl";
//import FeedbackForm from "./pages/FeedbackForm";
import FeedbackForm1 from "./pages/FeedbackForm1"
import TaskManager from "./pages/TaskManager";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicRoutes />}>

        <Route index element={<Home />} />
        <Route path="login" element={<AuthCannotAccess><Login /></AuthCannotAccess>} />
        <Route path="register" element={<AuthCannotAccess><Register /></AuthCannotAccess>} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="FeedbackForm1" element={<FeedbackForm1 />} />
        <Route path="TaskManager" element={<TaskManager />} />
      </Route>

      {/* Private Routes */}
      <Route element={<PrivateRoutes />}>
        <Route path="/dashboard" element={<Dashboard />} />


        <Route
          path="/admin"
          element={
            <AccessControl
              role={"admin"}
              requiredRoles={["admin", "super-admin"]}
              isPage={true} >
              <Admin />
            </AccessControl>
          }
        />
        <Route
          path="/super-admin"
          element={
            <AccessControl
              role={"super-admin"}
              requiredRoles={["super-admin"]}
              isPage >
              {/* // we can specify ispage ={true} ispage as both are same  */}
              <SuperAdmin />
            </AccessControl>
          }
        />
      </Route>
    </Routes>

  );
}

export default App;
// {/* <Parent>
//    <Child />
// </Parent> */}

// function parent ({children})

//aceess control has to wrapped on button to test
// 
//console.log the child from parent component
// from the parent component how do you get access to the child component
// by passing the child component as children (props) to parent component
//write a wrapper that allows the l

//i have a parent and children component i need to pass the child component as a chldren to the parent componnent
