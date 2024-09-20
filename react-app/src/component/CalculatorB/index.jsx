import { Component } from "react";
import BoilingVerdictB from "./BoilingVerdictB";
import TemperatureInput from "./TemperatureInputB";
import TemperatureInputB from "./TemperatureInputB";

function toCelsius(fahrenheit){
    return ((fahrenheit-32) * 5) /9;
}
function toFahrenheit(celsius){
    return ((celsius * 9) /5 +32;
}

function tryConvert(temperature, convert){
     const input = parseFloat(temperature);
     if(Number.isNaN(input)){
        return "";
     }
     const output = convert(input);
     const rounded = Math.round(output *1000)/1000;
     return rounded.toString();
}
class CalculatorB extends Component{
    constructor(props){
        super(props);

        this.state= {temperature:"",scale:"c"};
        this.handleCelciusChange = this.handleCelciusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    }
    handleCelciusChange(temperature){
        this.setState({scale:"c" ,temperature})
    }
    handleFahrenheitChange(temperature){
        this.setState({scale:"f" ,temperature})
    }

    render(){
        console.log(this.state);
        const {temperature, scale} = this.props;

        const celsius = scale === "f" ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === "c" ? tryConvert(temperature ,toFahrenheit): temperature;

        return(
            <div>
                <TemperatureInputB scale ="c" temperature={celsius} onTempChange = {this.handleCelciusChange} />
                <TemperatureInputB  scale = "f" temperature={fahrenheit} onTempChange = {this.handleFahrenheitChange} />
                <BoilingVerdictB celsius={parseFloat(celsius)} />
            </div>
        );
    }
}

export default CalculatorB;
