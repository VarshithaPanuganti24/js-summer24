import { createContext, useContext, useState } from "react";

export const FormContext = createContext({});

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    plan: "arcade",
    billing: "monthly",
    addOns: [],
  });
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const updateAddOns = (addonId, isChecked) => {
    setFormData((prev) => ({
      ...prev,
      addOns: isChecked
        ? [...prev.addOns, addonId] // Add if checked
        : prev.addOns.filter((id) => id !== addonId), // Remove if unchecked
    }));
  };

  return (
    <FormContext.Provider
      value={{ step, formData, setFormData, nextStep, prevStep,updateAddOns }}
    >
      {children}
    </FormContext.Provider>
  );
}

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a FormProvider");
  }
  return context;
};
