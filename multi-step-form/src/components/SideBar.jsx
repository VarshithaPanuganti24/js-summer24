 import { useFormContext } from "../state";

const Sidebar = () => {
  const { step } = useFormContext();

  const steps = [
    { number: 1, label: "Step 1" },
    { number: 2, label: "Step 2" },
    { number: 3, label: "Step 3" },
    { number: 4, label: "Step 4" },
    { number: 5, label: "Step 5" }
    
  ];

  return (
    <div className="sidebar">
      {steps.map(({ number, label }) => (
        <div key={number} className={`step ${step === number ? "active" : ""}`}>
          {label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;


// import React from "react";

// const Sidebar = ({ step, setStep }) => {
//   return (
//     <div className="w-1/4 bg-blue-600 text-white p-6 min-h-screen">
//       <ul className="space-y-6">
//         {[1, 2, 3, 4].map((num) => (
//           <li
//             key={num}
//             onClick={() => setStep(num)}
//             className={`cursor-pointer p-4 rounded-lg ${
//               step === num ? "bg-white text-blue-600 font-bold" : ""
//             }`}
//           >
//             <span className="mr-2">Step {num}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

//  export default Sidebar;

// import React from 'react';
// import { Link } from 'react-router-dom';

// const SideBar = ({step}) => {
//     return (
//         <div className="w-1/4 img= text-white p-6 min-h-screen">
//           <ul className="space-y-4">
//             {[1, 2, 3, 4].map((num) => (
//               <li key={num}>
//                 <Link
//                   to={`/step${num}`}
//                   className={`flex items-center p-3 rounded-lg ${
//                     step === num ? "bg-white text-blue-600 font-bold" : ""
//                   }`}
//                 >
//                   <span className="mr-2">{num}</span>
//                   {`Step ${num}`}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//     );
// };

// export default SideBar
