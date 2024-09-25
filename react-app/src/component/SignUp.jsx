import { Component ,createRef } from "react";
import "./SignUp.css";

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = { name: "", email: "", password: "" };
		

        this.pwRef = createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);


		// this.handleNameChange = this.handleNameChange.bind(this);
		// this.handleEmailChange = this.handleEmailChange.bind(this);
		// this.handlePasswordChange = this.handlePasswordChange.bind(this);
	}
    handleChange(event){
        console.log(event);
        const { id, value } =event.target;
        this.setState({
            [id]:value,
        });

    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.pwRef);

    }

	

	render() {
		console.log("state ", this.state);
        console.log("pwRef",this.pwRef);

        const {name,email,password} =this.state;
		const fields =[
			{
			Id:"name",
			type:"text",
			name:"name",
			value:this.state.name,
			label:"Name:",	
			},
			{
				Id:"email",
				type:"email",
				name:"email",
				value:this.state.email,
				label:"Email",	
			},
			{
				Id:"Password",
				type:"Password",
				name:"Password",
				value:this.state.password,
				label:"Password:",	
			},
			
		];
		
		return (
			<form id="signup-form-container" onSubmit={this.handleSubmit}>
				<div id="title-container">
					<h1>Welcome to React!</h1>
				</div>

				{/* name, email, password */}
				<div id="signup-form-input-container">
					{fields.map(({id,text,name,value,label}) => (
						<label key={id} id={id}>
							{label}
							<input onChange={this.handleChange} id={id} text={text} name={name} value={value} label={label} />
						</label> 
					))}
					{/* <label id="name">	
						Name:
						<input id="name" type="text" name="name" onChange={this.handleChange} value={name} />
					</label>

					<label id="email">
						Email:
						<input id="email" type="email" name="email" onChange={this.handleChange} value= {email}/>
					</label>
                    <label id="password">
						Password:
						<input id="password" type="password" name="password"  onChange={this.handleChange} value={password} ref={this.pwRef} />
					</label> */}

					{/* <label id="password">
						Password:
						<input id="password" type="password" name="password" ref={this.pwRef} />
					</label> */}
				</div>

				<div id="signup-form-submit-container">
					<button type="submit">Create Account</button>
					{/* <button type="reset">Reset Fields</button> */}
				</div>
			</form>
		);
	}
}

export default SignUp;