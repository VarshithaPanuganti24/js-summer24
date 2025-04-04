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
  const { step, setStep } = useFormContext();
  const location = useLocation();

  useEffect(() => {
    const currentStep = parseInt(location.pathname.replace("/step", ""));
    if (!isNaN(currentStep)) {
      setStep(currentStep);
    }
  }, [location.pathname]);

  return (
    <div className="form-container">
      <Sidebar />
      <div className="form-content">
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
        {step === 5 && <Step5 />}
      </div>
    </div>
  );
};

export default MultiStepForm;
