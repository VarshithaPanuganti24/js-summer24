import { Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const AuthCannotAccess = (props ) => {
    //const children = props.children;
    //console.log(props);
     const {children} = props;
     const  { user } = useAuth();
     const  isAuthenticated = user || user?.id > 0 || user?.accessToken;

    //  const contextValue = useAuth();
    //  const user = contextValue.user;
    //  const {user}= contextValue;

     
    if (isAuthenticated) return <Navigate to ="/dashboard" replace />;
    
    return children ;

    
};

export default AuthCannotAccess;

{/* <AuthCannotAccess>
    < Child />
</AuthCannotAccess> */}
//
//when login we need to redirect link the /logic to AuthCannotAccess
//where the Auth login checks if user is login in or not if not logged in login abd register
//get the user object without destructuring
// as system to control some access to components based on roles
//take the role check if he has permission from other role to render the button for amatching role
//