import React from "react";
import PageContainer from "../../../../component/Layout/PageContainer";
import LoginForm from "./LoginForm";

const Login = () => {
	return (
		<PageContainer pageTitle={"Login"}>
			<LoginForm />
		</PageContainer>
	);
};

export default Login;