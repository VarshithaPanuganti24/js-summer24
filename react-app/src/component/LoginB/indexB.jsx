import { Component } from "react";
import GreetingB from "./GreetingB"; 

function LoginButton(props){
    return (
        <button type = "button" onClick={props.onClick}>
            Login
        </button>
    );

}
function LogoutButton(props){
    return (
        <button type = "button" onClick={props.onClick}>Logout</button>
    );

}


class LoginB extends Component{
    constructor(props){
        super(props);
        this.state = {user:null};
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
    }

    handleLoginClick(){
        const randomUser = {
            firstName:"Varsha",
            userid:3,
            email:"varsha@gmail.com",
        };
        this.setstate({user:randomUser});
    }

     handleLogoutClick(){
        this.setstate({user:null});
    }

    render(){
        const {user} = this.state;
        return(
            <div>
                <GreetingB user={user} />
                {user? <LogoutButton onClick={this.handleLogoutClick} /> : <LoginButton onClick={this.handleLoginClick} />}

            </div>


        );
    }

}
export default LoginB