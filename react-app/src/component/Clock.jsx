import {Component}  from "react";

// proper functional React component (should be in its own file)
// but I'm not doing that due to laziness
function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }
class Clock extends Component{
    constructor(props){
        super(props);
        this.state = {username: "Terry",date:new Date()};
        
    }
    // lifecycle method React will call when your component has just mounted to the DOM
	// set up any resources here
    componentDidMount(){
        this.timerId = setInterval(() => this.tick(),1000);
        
    }
    // lifecycle method React will call when your component is about to get unmounted from the DOM
	// remove / clean up any resources here
    componentWillUnmount(){
        clearInterval(this.timerId);
    }
    // this method updates our state object which will trigger a re-render by React automatically
	// perform a state update (the correct way by using this.setState())
    tick(){
        // this.state = { date: new Date()} // wrong way, cannot reassign
		// this.state.date = new Date() // also wrong way

		console.log("tick running");

        const newState = { date: new Date()};
        this.setState(newState); // NEED TO USE THIS METHOD TO UPDATE STATE
	}
    

    // the method that returns the JSX we want to display to the UI
	// React will also call this method on its own, we just need to define it, hence React is declarative

    render(){
        const element = (
            
            <div>
                <h1>Hello world</h1>
                {/* <h2> Today date is  {this.state.date.toLocaleDateString()}</h2> */}
                <FormattedDate date={this.state.date} />

            </div>
        );
        return element;
    }

}
export default Clock;
//re- rending a components  occurs when props changed and state changes
//props can be same as state
//render trigres only when the state or props changes .if there is no state or propchages rending happens but react DOM doestnot bother to update
//render happens every single time and the diff algorithm check any changes in virtual dom and original dom and the changes only is represented
//unless we make setstate in any function or method render happens to element 