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
    <div className=" grid min-h-screen justify-center items-center bg-green-100  ">

      <div className=" mx-auto grid h-full w-full max-w-[940px] grid-rows-[auto_auto_1fr_auto] gap-x-4 bg-no-repeat shadow-md  sm:max-h-[600px] 
  sm:grid-cols-[274px_1fr] 
  sm:grid-rows-none 
  sm:gap-y-8 
  sm:rounded-2xl 
  sm:bg-white 
  sm:p-4">

<div className="
  rounded-xl 
  bg-[url('/images/bg-sidebar-mobile.svg')] 
  bg-cover 
  bg-no-repeat 
  text-white 
  p-4 
  sm:bg-[url('/images/bg-sidebar-desktop.svg')] 
  sm:p-6
">


    
      <Sidebar />
      </div >
      
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
        {/* </div> */}
      
    </div>
    </div>
    
  );
};

export default MultiStepForm;

{/* <div className=" w-full max-w-[940px] h-[600px] grid grid-rows-[1fr_auto] sm:grid-cols-[1fr_2fr] gap-x-4 rounded-2xl shadow-lg  bg-white overflow-hidden"> */}

      {/* <div className=" hidden sm:block rounded-xl bg-[url('/images/bg-sidebar-desktop.svg')] bg-cover bg-no-repeat text-white p-6" > */}
      