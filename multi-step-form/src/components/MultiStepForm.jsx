import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFormContext } from "../state";
import Sidebar from "./SideBar";

import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";

const MultiStepForm = () => {
  const { step } = useFormContext();
  

  // useEffect(() => {
  //   const currentStep = parseInt(location.pathname.replace("/step", ""));
  //   if (!isNaN(currentStep)) {
  //     setStep(currentStep);
  //   }
  // }, [location.pathname]);

  return (
    <div className=" flex min-h-screen items-center justify-center  p-15">

    <div className=" w-full max-w-[940px] h-[600px] grid grid-rows-[1fr_auto] sm:grid-cols-[1fr_2fr] gap-x-4 rounded-2xl shadow-md p-4">
      

      <div className=" sm:block rounded-xl bg-[url('/images/bg-sidebar-desktop.svg')] r p-4 text-white" >
      <Sidebar />
      </div>
      
      <div className="col-span-full row-start-2 row-end-[10] grid grid-rows-container sm:col-span-1 sm:row-start-auto sm:row-end-auto p-4 sm:p-6">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
      </div>
    </div>
    </div>
    
  );
};

export default MultiStepForm;
