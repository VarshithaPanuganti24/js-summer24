import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import FormError from "../../../../component/FormError";
import Button from "../../../../component/Button";
import Input from "../../../../component/Input";



const EMAIL_REGEX = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const schema = yup.object({
	email: yup.string().max(50,"max charater is 50.").email().matches(EMAIL_REGEX).required("email is required"),
	password: yup.string().min(8,"Must be atleast characters.").required(),
	
})

const LoginFormB = () => {

    const {
		register,
		handleSubmit,
        setErrMsg,
        setIsLoading,
        isLoading,
        validEmail,
        validPwd,
        goBack,
        navigate,
        pwd,email,from,errors

		// setValue,
		// trigger,
		// watch,
		//formState: {errors},


	} = useForm({
		resolver: yupResolver(schema),
		defaultValues: {
			email:"",
			password: "",
			// phone:"",
			// terms: false,
		},
	});
    const handleLogin = async (e) => {
        e.preventDefault();
        setErrMsg("");
        setIsLoading(true);

        // perform final validation
        const t1 = EMAIL_REGEX.test(email) && email.length <= 50;
        const t2 = pwd.length >= 4 && pwd.length <= 16;

        if (!t1 || !t2) {
          setErrMsg("Invalid Inputs");
          setIsLoading(false);
          return;
        }

        try {
          // const user = await fakeLogin();
          // setUser(user);
          // refreshToken is stored in localStorage here, but should be set in an secure/http only cookie
          localStorage.setItem("refreshToken",`refresh: ${Math.floor(Math.random() * 100)}` );
          navigate(from, { replace: true });
        } catch (err) {
          setErrMsg("The server could not be reached. Please try again later.");
          setIsLoading(false);
        }
      };

    //   console.log(emailRef);
    // const onSubmit = (data) => {
    //     alert(JSON.stringify(data))
    
    //     };

	return (
        <>
            <form onSubmit={handleSubmit(handleLogin)} >
		        <div>
				    <label id="email">Email: </label>
				    <Input id="email" type="email" {...register("email")} />
				{errors?.email && <FormError>{errors.email.message}</FormError>}
			    </div>

		{/* password field  */}
		        <div>
				    <label id="password">Password: </label>
				    <Input id="password" type="password" {...register("password")} />
				    {errors?.password && <FormError>{errors.password.message}</FormError>}
		        </div>

		

		        <Button color="primary" type="submit" disabled={isLoading || !validEmail || !validPwd}>
                     Log in 
                </Button>

                <Button color="danger" onClick={goBack}>
                    Go Back
                </Button>

	         </form>
        </>
	);
};

     


export default LoginFormB;