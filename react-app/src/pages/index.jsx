import React, { useEffect, useState} from "react";

const Home = () => {
	const [user,setUser] =useState(null);
	const [err,setErr] =useState(null);
		
	

	useEffect(() => {
		fetch("https://jsonplaceholder.typicode.com/users/1")
		.then((response) => {
			console.log("response",response);
			if(!response.ok){
				throw Error(`unable to fetch user,status code ${response.status}`);
			}
		
			return response.json();
		})
		.then((user) => {
			console.log("user",user);
			setUser(user);
		})
		
		.catch((error) => {
			console.log('"error,error');
			setErr(error);
		});
	},[]);

	if(err){
		return (
			<div>
				<h1>{err?.message}</h1>
			</div>
		);
	}

	return <div>
		<h1>Welcome back,{user?.name}</h1>
		</div>;
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