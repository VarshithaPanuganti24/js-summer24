import { Component } from "react";

const scaleNames={
    c: "celsius",
    f: "fahrenheit",
};

export default class TemperatureInputB extends Component{

    constructor(props){
        super(props),
        this.handleChange =this.handleChange.bind(this);
    }
    handleChange(e){
        this.props.OnTempChanges(e.target.value);
    }

    render(){
        const {temperature, scale } =this.props;
        return (
            <fieldset>
                <legend>Enter Temperature  in {scaleNames[scale]}</legend>
                <input value={temperature} onChange={this.handleChange} />
            </fieldset>
        )
    }
}