import { useEffect, useState } from "react";

function FormattedDate(props) {
	return <h2>It is {props.date.toLocaleTimeString()}</h2>;
}

export default function ClockC() {
	// maintain state with hook
	const [date, setDate] = useState(new Date());

	function tick() {
		setDate(new Date());
	}

	function intervalCb() {
		tick();
	}
	// perform side effects with useEffect hook
	// equivalent to componentDidMount & componentWillUnmount
	useEffect(() => {
		console.log("useEffect: componentDidMount");
		const timerId = setInterval(intervalCb, 1000);

		return () => {
			console.log("useEffect: componentWillUnmount");
			clearInterval(timerId);
		};
	}, [intervalCb]);

	console.log("rendering");
	return (
		<div>
			<h1>Hello world</h1>
			<FormattedDate date={date} />
		</div>
	);
}


// when an useEffect is given the callback an empty dependency array  rendering happens 
// 1 The callback inside useEffect runs once, after the component is first rendered  ,Then the  cleanup function (return () => {}) will run  when the component is unmounted
//The dependency array tells the callback function when to call the callback function 

//1 the call back inside the useeffect runs once after and 
// Empty Dependency Array ([]): useEffect runs once on mount and sets the interval. It cleans up when the component unmounts. This is the most efficient approach in this case, as you only want to set the interval once.

// Dependency Array with [date]: useEffect runs on every render, resetting the interval every time the date changes. This is inefficient because a new interval is set every second.

// Dependency Array with [intervalCb]: Acts similarly to an empty array. useEffect runs once on mount and cleans up when unmounted. Since intervalCb doesn't change, it's stable.

//without an dependency array ,the call back function is rerender if the state or props changes
// internalcb function passing as instance to tick function 
//what happens in the functional component for rerendering

// As the execution happens on the the function components the function executes happens again 
//so there is change in address og intervalcb which is a state change happen which triggers the useeffect so it clears the compoents willunmount and componentdidmount on rerendering.


//? read the class based component and function based component?and how both work inexecution
//