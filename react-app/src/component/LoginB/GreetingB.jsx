import { Component } from  "react";

function UserGreeting(props){
    return <h1>{`Welcome back${props.user.firstname}`}</h1>
}
function GuestGreeting(props){
    return <h1>Please Login in</h1>
}

class GreetingB extends Component{
    constructor(props){
        super(props); 
    }

    render(){
        return(
        this.props.user ? <UserGreeting user={this.props.user} /> : <GuestGreeting />
    )
}
    
}

export default GreetingB;