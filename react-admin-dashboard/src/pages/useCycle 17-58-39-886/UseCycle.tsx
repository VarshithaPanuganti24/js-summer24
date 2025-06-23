// Implement a useCycle
// hook that cycles through a sequence of values each time its function is called.

// Arguments
// The useCycle hook should accept an indefinite number of arguments, 
// each representing a value in the sequence to cycle through.

// Returns
// A tuple containing the following elements:

// value: The current value
// cycle: A function that changes the current value to the next one in the sequence, 
// or the first one if the current value is the last in the sequence

// Example usage:
// export default function Component() {
//   const [mode, cycle] = useCycle('low', 'medium', 'high');

//   return (
//     <div>
//       <p>State: {mode}</p>
//       <button onClick={cycle}>Cycle</button>
//     </div>
//   );

//   export default function App() {
//   return (
//     <>
//       <header>Header</header>
//       <div className="columns">
//         <nav>Navigation</nav>
//         <main>Main</main>
//         <aside>Sidebar</aside>
//       </div>
//       <footer>Footer</footer>
//     </>
//   );
// }

// body {
//   font-family: sans-serif;
//   font-size: 12px;
//   font-weight: bold;
//   margin: 0;
//   min-height: 100vh;
// }

// #root {
//   display: flex;
//   flex-direction: column;
//   min-height: 100vh;
// }

// * {
//   box-sizing: border-box;
// }

// header,
// nav,
// main,
// aside,
// footer {
//   padding: 12px;
//   text-align: center;
// }

// header {
//   background-color: tomato;
//   height: 60px;
// }

// .columns {
//   display: flex;
//   flex-grow: 1;
// }

// nav {
//   background-color: coral;
//   flex-shrink: 0;
//   width: 100px;
// }

// main {
//   background-color: moccasin;
//   flex-grow: 1;
// }

// aside {
//   background-color: sandybrown;
//   flex-shrink: 0;
//   width: 100px;
// }

// footer {
//   background-color: slategray;
//   height: 100px;
// }