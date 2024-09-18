import { Component } from "react";
import Greeting from "./Greetings";

function LoginButton(props){
    return (
    <button type="button" onClick={props.onClick}>
        Login
    </button>
    );
}
function LogOutButton(props){
    return (
    <button type="button" onClick={props.onClick}>
        Logout
    </button>
    );
}

class Login extends Component{
    constructor(props){
        super(props)
        this.state = {user:null}
        //bind callbacks
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);

    }
    handleLoginClick(){
        const randomUser = {
            userId:1,
            firstName: "Jack",
            email:"jack@gmail.com"
        };
        this.setState({user:randomUser});

    }
    handleLogoutClick(){
        this.setState({user: null});

    }
    render(){
        const {user}=this.state;
        return(
                <div>
                <Greeting user={this.state.user}/>
                {user ? <LogOutButton onClick={this.handleLogoutClick} />  : 
                <LoginButton onClick={this.handleLoginClick} />}
                </div>
        );

    }
}
export default Login;