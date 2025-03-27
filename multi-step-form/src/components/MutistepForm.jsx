import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step < 4) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep((prev) => prev - 1);
    }
  };

  return (
    <div className="flex h-screen">
      <Sidebar step={step} setStep={setStep} />
      <div className="flex-1 p-10">
        {step === 1 && <Step1 nextStep={nextStep} />}
        {step === 2 && <Step2 nextStep={nextStep} prevStep={prevStep} />}
        {step === 3 && <Step3 nextStep={nextStep} prevStep={prevStep} />}
        {step === 4 && <Step4 prevStep={prevStep} />}
      </div>
    </div>
  );
};

export default MultiStepForm;

