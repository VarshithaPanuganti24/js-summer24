import React, { useEffect, useState} from "react";

const Home = () => {
	const [user,setUser] =useState(null);
	const [err,setErr] =useState(null);
	const [isLoading, setIsLoading] = useState(false);
	
	async function getUser(){
		setIsLoading(true);

		try {
			console.log("calling fetch");
			const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
			console.log("after response");
			const user = await response.json();
			console.log("user",user);
			setUser(user);
		} catch (error) {
			console.log("error",error);
			setErr(error);

		} finally {
			setIsLoading(false);
		}

	}
	
	//async is another way of handling promises
	 
	const getUserArrow = async () => {
			try{
				const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
				console.log("after response");
				const user = await response.json();
				console.log("user",user);
				setUser(user);

			} catch (error){
					console.log("error",error);
					setErr(error);
			}
	};


	useEffect(() => {
		console.log("start of use effect");
		//getUser();
			// fetch("https://jsonplaceholder.typicode.com/users/1")
			// 	.then((response) => {
			// 		console.log("response",response);
			// 		if(!response.ok){
			// 			throw Error(`unable to fetch user,status code ${response.status}`);
			// 		}
		
			// 		return response.json();
			// 	})
			// 	.then((user) => {
			// 		console.log("user",user);
			// 		setUser(user);
			// 	})
		
			// 	.catch((error) => {
			// 		console.log('"error,error');
			// 		setErr(error);
			// 	});
			console.log("end of use effect");
	},[]);

	console.log("rendering");

	if (isLoading)
		 return (
		 		<div>
						<strong>LOADING...</strong>
		 		</div>
		);

	if(err){
		return (
				<div>
					<h1>{err?.message}</h1>
				</div>
		);
	}

	return (
			<div>
				<h1>Welcome back,{user?.name}</h1>
			</div>
	);
};

export default Home;





//Http method
//GET,yes
//HEAD,
// PUT,:yes
// DELETE,:yes, once you delete you hit the post multiple times it shows nothing which is same
// POST,:NO, AS post retrives the data everytimes it returns if content is present or creates anew object
// PATCH :NO, as the new changes made multiple the patch data is not same

//when credit card payment transaction we ask not to  refreshpage because it is the posts happening in there

//The POST method is not idempotent because it creates a new resource each time it is called. The PATCH method is also not idempotent by default, but it can be made idempotent depending on how the resource is changed and how the server is implemented.
// when we call fetch we are registering a callback function with a promise it returns  promise first which is a call back function in the code we use as then method