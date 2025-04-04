import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../state";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const { formData, setFormData, nextStep, prevStep,step } = useFormContext();

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: formData,
  });
  const navigate = useNavigate();

  const plans = [
    { id: "arcade", name: "Arcade", monthly: 9, yearly: 90 },
    { id: "advanced", name: "Advanced", monthly: 12, yearly: 120 },
    { id: "pro", name: "Pro", monthly: 15, yearly: 150 },
  ];

  useEffect(() => {
    // Update global state whenever `plan` changes in React Hook Form
    setFormData((prev) => ({
      ...prev,
      plan: formData.plan,
      billing: formData.billing,
    }));
  }, [formData.plan, setFormData]);

  // ✅ Update selected plan
  const handlePlanChange = (event) => {
    setValue("plan", event.target.value);
    setFormData((prev) => ({ ...prev, plan: event.target.value }));
  };

  // ✅ Toggle billing type (Monthly <-> Yearly)
  const toggleBilling = () => {
    setFormData((prev) => {
      const newBilling = prev.billing === "monthly" ? "yearly" : "monthly";

      setValue("billing", newBilling);
      return {
        ...prev,
        billing: newBilling,
      };
    });
  };

  // ✅ Form Submission
  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
    navigate("/step3");
    console.log("Step 2 Data:", data);
  };
  const handleGoBack = () => {
    prevStep();
    navigate(`/step${step - 1}`);  // Navigate to previous step based on current step
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h2 className="text-2xl font-bold mb-4">Select Plan</h2>
      <p>You have the option of monthly or yearly billing.</p>

      {/* ✅ Plan Selection (Radio Buttons) */}
      <div className="plans">
        {plans.map((plan) => (
          <label
            key={plan.id}
            className={`plan ${formData.plan === plan.id ? "selected" : ""}`}
          >
            <input
              type="radio"
              name="plan"
              value={plan.id}
              {...register("plan", { required: "Please select a plan" })}
              checked={formData.plan === plan.id}
              onChange={handlePlanChange} // ✅ Update state on change
            />
            <div className="plan-content">
              <strong>{plan.name}</strong>
              <p className="price">
                ${formData.billing === "monthly" ? plan.monthly : plan.yearly}/
                {formData.billing === "monthly" ? "mo" : "yr"}
              </p>
            </div>
          </label>
        ))}
      </div>

      {/* ✅ Validation Message */}
      {errors.plan && <p className="text-red-500">{errors.plan.message}</p>}

      {/* ✅ Billing Toggle */}
      <div className="toggle-container">
        <span>Monthly</span>
        <div
          className={`toggle-switch ${
            formData.billing === "yearly" ? "active" : ""
          }`}
          onClick={toggleBilling} // ✅ Toggle billing on click
        ></div>
        <span>Yearly</span>
      </div>

      {/* ✅ Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button
          type="button"
          onClick={handleGoBack}
          className="bg-gray-300 text-black p-2 rounded"
        >
          Go Back
        </button>
        <button type="submit" className="bg-blue-500 text-black p-2 rounded">
          Next Step
        </button>
      </div>
    </form>
    </div>
  );
};

export default Step2;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { useFormContext } from "../state";

// const Step2 = () => {
//   const { formData, setFormData, nextStep,prevStep } = useFormContext();
//   const { handleSubmit, register, setValue,formState:{errors} } = useForm({
//     defaultValues:formData,
//   });

//   const plans = [
//     { id: "arcade", name: "Arcade", monthly: 9, yearly: 90 },
//     { id: "advanced", name: "Advanced", monthly: 12, yearly: 120 },
//     { id: "pro", name: "Pro", monthly: 15, yearly: 150 },
//   ];
//   const handlePlanChange = (planId) => {
//     setFormData((prev) => ({ ...prev, plan:planId }));
//     console.log("Final Form Data:", { ...formData, planId });

//     setValue("plan", planId);
//     console.log("plaid", planId);
//   };

//   const toggleBilling = () => {
//     const newBilling = formData.billing === "monthly" ? "yearly" : "monthly";
//     setFormData((prev) => ({ ...prev, billing: newBilling }));
//     setValue("billing", newBilling);
//   };

//   const onSubmit = (data) => {
//     setFormData((prev) => ({ ...prev, ...data }));
//     nextStep();
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//         <h2 className="text-2xl font-bold mb-4">Select Plan</h2>
//         <p>You have the option of monthly or yearly billing.</p>

//         <div className="plans">
//           {plans.map((plan) => (
//             <label
//               key={plan.id}
//               classame={`plan ${formData.plan === plan.id ? "selected" : ""}`}

//             >
//               <input
//                 type="radio"
//                 name="plan"
//                 value={plan.id}

//                 {...register("plan",{required:"please select a plan"})}
//                 checked={formData.plan === plan.id}
//                 onclick={() => handlePlanChange(plan.id)}
//               />
//               <div className="plan-content">
//                 <strong>{plan.name}</strong>
//                 <p className="price">
//                   ${formData.billing === "monthly" ? plan.monthly : plan.yearly}/
//                   {formData.billing === "monthly" ? "mo" : "yr"}
//                 </p>
//               </div>
//             </label>
//           ))}
//         </div>
//         {errors.plan && <p className="text-red-500">{errors.plan.message}</p>}

//         <div className="toggle-container">
//           <span>Monthly</span>
//           <div
//             className={`toggle-switch ${
//               formData.billing === "yearly" ? "active" : ""
//             }`}
//             onClick={toggleBilling}
//           ></div>
//           <span>Yearly</span>
//         </div>

//         <div className="flex justify-between mt-6">
//         <button type="button"  onClick={prevStep} className="bg-blue-500 text-black p-2 rounded">
//            Go Back
//           </button>

//           <button type="submit" className="bg-blue-500 text-black p-2 rounded">
//             Next Step
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Step2;
