import { Component } from "react";

function UserGreeting(props) {
    return <h1>{`Welcome back ${props.user.firstName}!`}</h1>;
}
  
function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
}

function Greetings(props){

        return this.props.user ? <UserGreeting user={this.props.user} /> : <GuestGreeting />;
        
}
export default Greetings;
