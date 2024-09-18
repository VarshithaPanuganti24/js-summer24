import React,{ Component } from "react";

class Toggle extends Component{
    constructor(props){
        super(props)
        this.state ={ isToggleOn:true }; //default state

        //// binding the "this" reference to our class Toggle
		// otherwise when we pass this to the button onClick handler, the "this"
		// reference might be lost
		// we need this.setState to be invoked correctly
        this.handleClick = this.handleClick.bind(this)
    }
    //onclick handler
    handleClick(e){
        console.log("click event", e)

        this.setState((prevstate) => {return { isToggleOn: !prevstate.isToggleOn}} );

    }
    render(){
        return (
            <div>
                
                <h1>{this.state.isToggleOn ? "Toggle is On" : "Toggle is OFF"}</h1> 
                <button type="button" onClick={this.handleClick}>
                    {this.state.isToggleOn ? "ON" : "OFF"}
                    </button>
            </div>
        );
    }
}
export default Toggle;