import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
import Comment from "./component/Comment"

// "./component/Comment"

function Welcome(props){
  console.log("prop",props)
  return (
    <div>
          <h1>Hello, {props.name}</h1>
    </div>
    
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = (
	<div>
		<Welcome name="Sara">
			<div>DIV</div>
			<h1>H1</h1>
		</Welcome>

		<Welcome name="Derek">
			<div>DIV</div>
			<h1>H1</h1>
		</Welcome>

		<Welcome name="Harshil">
			<div>DIV</div>
			<h1>H1</h1>
		</Welcome>
	</div>
);

 console.log("element", element);

// const user ={
//   firstname:  "Varshitha",
//   lastname: "Panuganti",
//   age: 30,
// };
// function formatName({ firstname,lastname }){
//   return `${firstname} ${lastname}`;
// }
// function getGreeting(user) {
//   if (user) return <h1> Hello, { formatName(user)} !</h1>
//   return <h1>Hello ,Guest User !</h1>
// }
// //const element = getGreeting();
// const link = (
// <a href="https://www.reactjs.org" target= "_blank">Learn React</a>
// );

// const element = (
// 	<div>
// 		{getGreeting(user)}
// 		{link}
// 	</div>
// );
// console.log(element);

// function tick(){
//       const time = new Date().toLocaleTimeString();
//       const todaydate = new Date().toLocaleDateString();
//       const element = (
//       <div>
//         <h1> Hello world</h1>
//         <h2>today date {todaydate}</h2>
//         <h2>It is {time}</h2>
//       </div>
//       );
//       root.render(element);
// }
// setInterval(tick, 1000);
const author ={ avatarurl: "...",name: "Varshitha"};

root.render(<Comment author={author} text={"comment1"} date={new Date()} />);

// {/* <div>
//   {getGreeting(user)}
//   {link};

// </div>; */}
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
