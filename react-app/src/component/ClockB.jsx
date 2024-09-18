import { Component } from "react";

function FormattedDate1(props){
    return <h2>Time is {props.date.toLocaleTimeString()}</h2>
}
class ClockB extends Component{
    constructor(props){
        super(props);
        this.state = {username: "Varsha",date:new Date()};
    }
    componentDidMount(){
        this.timerId= setInterval(() => this.tick(),1000);

    };
    componentWillUnmount(){
        clearInterval(this.timerId);
    };
    
    tick(){
        const newState = {date: new Date()};
        this.setState(newState);
    }
    render(){
        return(
        <div>
            <h1>Hello {this.state.username}</h1>
            <h2>Date is {this.state.date.toLocaleDateString()}</h2>
            <FormattedDate1 date ={this.state.date} />
        </div>
        );
    }
}

export default ClockB;