import { createContext, useContext, useState } from "react";

export const FormContext = createContext({});

export function FormProvider({ children }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    plan: "arcade",
    billing: "monthly",
    addOns: [],
  });
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const markAsSubmitted = () => setIsSubmitted(true);

  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);

  const isStepCompleted = (stepNumber) => {
    switch (stepNumber) {
      case 1:
        return (
          formData.name.trim() !== "" &&
          formData.email.trim() !== "" &&
          formData.phone.trim() !== ""
        );
      case 2:
        return formData.plan !== "";
      case 3:
        return true; // No mandatory fields in step 3
      case 4:
        return true;
      default:
        return false;
    }
  };

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
      value={{
        step,
        setStep,
        formData,
        setFormData,
        nextStep,
        prevStep,
        updateAddOns,
        isSubmitted,
        markAsSubmitted,
        isStepCompleted,
      }}
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
