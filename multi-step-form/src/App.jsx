import React from "react";

import { FormProvider } from "./state";

import MultiStepForm from "./components/MultiStepForm";

function App() {
  return (
    <FormProvider>
      <MultiStepForm />
    </FormProvider>
  );
}

//export default App;




// import { Step1 } from "./components/Step1";
// import Step2 from "./components/Step2";
// import Step3 from "./components/Step3";
// import { Step4 } from "./components/Step4";
//import {Stepper } from "./components/Stepper";

// const App = () => {
//   return (
//     <div className="App">
//       <AppProvider>
//         <Router>
          
//           <Routes>
//             <Route path="/" element ={< Step1 />} />
//             <Route path="/step2" element ={< Step2 />} />
//             <Route path="/step3" element ={< Step3 />} />
//             {/* <Route path="/step4" element ={< Step4 />} /> */}
//           </Routes>

//         </Router>
//       </AppProvider>
//     </div>
//   );
// };

export default App;