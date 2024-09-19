import { Component, createRef } from "react";

class SignUpB extends Component{
    constructor(props){
        super(props);
        this.state= {email: "",password: ""};

        this.pwRef = createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }
    handleChange(event){
        console.log(event)
        const {id, value} = event.target;
        this.setState({
            [id]:value
        });
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.pwRef);
    }

    render(){
        console.log("state ", this.state);
        console.log("pwRef",this.pwRef);
        const {email,password} =this.state;

        return(
            
             <form id= "Signin-container" onSubmit={this.handleSubmit}>

                    <div id= "Title-container">
                        <h1>"Welcome ,Please Sign in"</h1>
                    </div>

                    <div id ="Signin -form-input-container">

                        <label id="email" >
                        Email
                            <input id="Email" type="email" name="email" onChange={this.handleChange} value ={email } />
                         
                        </label>

                        <label id="Password" > 
                        Password
                        <input id="Password"  type="password" name="password" onChange ={this.handleChange}ref={this.pwRef} />
                        </label>
                    </div>
               
                <div id = "Sign in container" >
                    <button type="submit">SignIn</button>
                    

                </div>
            </form>
        )
    }

}
export default SignUpB;