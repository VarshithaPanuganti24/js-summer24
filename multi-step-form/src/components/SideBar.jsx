import React from "react";
import { useFormContext } from "../state";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const { step, setStep, isStepCompleted, isSubmitted } = useFormContext();
  const navigate = useNavigate();

  const steps = [
    { number: 1, label: "Step 1" },
    { number: 2, label: "Step 2" },
    { number: 3, label: "Step 3" },
    { number: 4, label: "Step 4" },
  ];

  const handleStepClick = (clickedStep) => {
    if (isSubmitted) return;
  
    // ✅ If going backward, always allow
    if (clickedStep <= step) {
      setStep(clickedStep);
      navigate(`/step${clickedStep}`);
      return;
    }
    console.log("Clicked:", clickedStep);
    console.log("Current step:", step);
    console.log("Step 1 valid:", isStepCompleted(1));
    console.log("Step 2 valid:", isStepCompleted(2));
    console.log("Step 3 valid:", isStepCompleted(3));
  
    // ✅ If going forward, check that all previous steps are complete
    const allPrevStepsComplete = Array.from({ length: clickedStep - 1 }, (_, i) =>
      isStepCompleted(i + 1)
    ).every(Boolean);
  
    if (allPrevStepsComplete) {
      setStep(clickedStep);
      navigate(`/step${clickedStep}`);
    }
  };
  

  return (
    <div className="sidebar">
      {steps.map(({ number, label }) => {
        const isCurrent = step === number;
        const isAllowed = number <= step || isStepCompleted(number - 1); // basic logic for style

        return (
          <div
            key={number}
            className={`step ${isCurrent ? "active" : ""} ${
              !isAllowed ? "disabled" : ""
            }`}
            onClick={() => handleStepClick(number)}
          >
            {label}
          </div>
        );
      })}
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

// return (
//   <div className="sidebar">
//     {steps.map(({ number, label }) => (
//       <div key={number} className={`step ${step === number ? "active" : ""}`}>
//          <Link to={`/step${number}`}>{label}</Link>
//       </div>
//     ))}
//   </div>
// );
// }
