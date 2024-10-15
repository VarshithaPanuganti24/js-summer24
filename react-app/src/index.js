import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// import WelcomeDialog from "./components/WelcomeDialog";
// import SplitPane from "./components/SplitPane";
// import SignUp from "./components/SignUp";
//import Clock from "./components/Clock";
// import FancyBorder from "./components/WelcomeDialog/FancyBorder";
// import Counter from "./components/Counter";
// import { SignUpB } from "./components/SignUpB";
// import ClockC from "./components/ClockC";
// import ClockContainer from "./components/ClockContainer";
//import FilterableProductTable from "./components/FilterableProductTable";
import "./index.css";
import App from "./App";
import AuthProvider from "./contexts/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<AuthProvider>
			<App />
		</AuthProvider>
		
	</BrowserRouter>
);


// import ReactDOM from "react-dom/client";
// // import WelcomeDialog from "./components/WelcomeDialog";
// // import SplitPane from "./components/SplitPane";
// // import SignUp from "./components/SignUp";
// // import Clock from "./components/Clock";
// // import FancyBorder from "./components/WelcomeDialog/FancyBorder";
// // import Counter from "./components/Counter";
// // import { SignUpB } from "./components/SignUpB";
// // import ClockC from "./components/ClockC";
// // import ClockContainer from "./components/ClockContainer";
// import FilterableProductTable from "./components/FilterableProductTable";
// // import "./index.css";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
// 	<div>
// 		<FilterableProductTable />
// 	</div>
// );

// function Clock(props){
//       const time = new Date().toLocaleTimeString();
//       const todaydate = new Date().toLocaleDateString();
//       const element = (
//       <div>
//         <h1> Hello world</h1>
//         <h2>today date {todaydate}</h2>
//         <h2>It is {time}</h2>
//       </div>
//       );
//       return element
// }

//setInterval(tick, 1000);
// root.render();




