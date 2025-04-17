import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../state";
import { useNavigate } from "react-router-dom";

const Step2 = () => {
  const { formData, setFormData, nextStep, prevStep, step } = useFormContext();

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
    {
      id: "arcade",
      name: "Arcade",
      monthly: 9,
      yearly: 90,
      image: "/images/icon-arcade.svg",
    },
    {
      id: "advanced",
      name: "Advanced",
      monthly: 12,
      yearly: 120,
      image: "/images/icon-advanced.svg",
    },
    {
      id: "pro",
      name: "Pro",
      monthly: 15,
      yearly: 150,
      image: "/images/icon-pro.svg",
    },
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
    // navigate("/step3");
    console.log("Step 2 Data:", data);
  };
  const handleGoBack = () => {
    prevStep();
    // navigate(`/step${step - 1}`);  // Navigate to previous step based on current step
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="
      col-span-full 
      row-start-2 
      row-end-[10] 
      grid 
      grid-rows-[1fr_auto] 
      sm:col-span-1 
      sm:row-start-auto 
      sm:row-end-auto
      min-h-[500px]  
    "
    >
      <div className="mx-4 self-start rounded-xl bg-white px-6 py-8 sm:mx-0 sm:self-auto sm:px-20 sm:py-10 ">
      <h1 className="text-2xl font-bold text-[hsl(var(--secondary))] sm:text-3xl">
          Select Your plan
        </h1>
        <p className="my-2 text-base text-[hsl(var(--foreground))] ">
          You have the option of monthly or yearly billing.
        </p>

        {/* ✅ Plan Selection (Radio Buttons) */}
        <div className="grid gap-3 pt-3 sm:grid-cols-3 sm:gap-4 sm:pt-8">

          {plans.map((plan) => (
            <label
              key={plan.id}
              htmlFor={plan.id}
            

              className={`relative w-full flex gap-3 rounded-lg border p-4 transition-all hover:cursor-pointer 
                sm:grid sm:gap-10
                hover:border-[hsl(var(--primary))] focus-visible:border-[hsl(var(--primary))]
                ${
                  formData.plan === plan.id
                    ? "border-[hsl(var(--primary))] bg-[hsl(var(--muted-foreground))]"
                    : "border-foreground bg-transparent"
                }`}
            >
              <input
                type="radio"
                name="plan"
                id={plan.id}
                value={plan.id}
                className=" hidden  "
                {...register("plan", { required: "Please select a plan" })}
                checked={formData.plan === plan.id}
                onChange={handlePlanChange} // ✅ Update state on change
              />

              <img src={plan.image} alt={plan.name} className="h-10 w-10" />

              <div className="grid sm:gap-1 text-left">
                <strong className="text-secondary">{plan.name}</strong>
                <span className="text-sm text-foreground">
                  ${formData.billing === "monthly" ? plan.monthly : plan.yearly}
                  /{formData.billing === "monthly" ? "mo" : "yr"}
                </span>
                <span class="text-xs font-medium text-secondary">
                {formData.billing === "yearly" ? "2 months free" :"" }</span>

              </div>
            </label>
          ))}

          {/* ✅ Validation Message */}
          {errors.plan && <p className="text-red-500">{errors.plan.message}</p>}
        </div>

        {/* ✅ Billing Toggle */}
        <div className="toggle-container">
          <label className="flex items-center justify-center gap-10 p-3 rounded-lg cursor-pointer w-full mx-auto bg-[hsl(var(--muted-foreground))]">
            <span
              className={`${
                formData.billing === "monthly"
                  ? "text-secondary font-bold"
                  : "text-gray-500 font-bold"
              }`}
            >
              Monthly
            </span>
            <div
              className={`toggle-switch ${
                formData.billing === "yearly" ? "active" : ""
              }`}
              onClick={toggleBilling} // ✅ Toggle billing on click
            ></div>
            <span
              className={`${
                formData.billing === "yearly"
                  ? "text-secondary font-bold"
                  : "text-gray-500 font-bold"
              }`}
            >
              Yearly
            </span>
            

          </label>
        </div>
        </div>
        {/* ✅ Navigation Buttons */}
        <div className="flex flex-row-reverse justify-between bg-white px-4 py-4 sm:px-20">
          <button
            type="submit"
            className="rounded-md bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-3 text-base font-medium capitalize transition-colors hover:bg-[hsl(var(--secondary))]/80 disabled:pointer-events-none disabled:opacity-50 sm:px-6"
          >
            Next Step
          </button>

          <button
            type="button"
            onClick={handleGoBack}
            className="whitespace-nowrap rounded-md px-4 py-2 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 hover:bg-[hsl(var(--muted-foreground))]/20  font-medium capitalize text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] sm:px-2"
          >
            go back
          </button>
        </div>
      
    </form>
  );
};

export default Step2;

// return (

//   <form onSubmit={handleSubmit(onSubmit)} className="
//   col-span-full
//   row-start-2
//   row-end-[10]
//   grid
//   grid-rows-[1fr_auto]
//   sm:col-span-1
//   sm:row-start-auto
//   sm:row-end-auto
// ">
//  <div className="mx-4 self-start rounded-xl bg-white px-6 py-8 sm:mx-0 sm:self-auto sm:px-20 sm:py-10 ">
//  <h1 className="text-2xl font-bold text-secondary sm:text-3xl">
//         Select Your plan
//       </h1>
//   <p className="my-2 text-base text-gray-500 ">You have the option of monthly or yearly billing.</p>

//     {/* ✅ Plan Selection (Radio Buttons) */}
//     <div className="grid gap-3 pt-3 sm:grid-cols-3 sm:gap-4 sm:pt-8">
//     <div className="flex  gap-3 my-8  rounded-b-lg">
//       {plans.map((plan) => (
//         <label
//           key={plan.id}
//           className={`plan cursor-pointer rounded-lg border-2 p-10 w-[120px] text-left  ${formData.plan === plan.id ? "selected" : ""}`}
//         >
//           <input
//             type="radio"
//             name="plan"
//             value={plan.id}
//             {...register("plan", { required: "Please select a plan" })}
//             checked={formData.plan === plan.id}
//             onChange={handlePlanChange} // ✅ Update state on change
//           />

//           <div className="text-sm text-left">
//             <strong >{plan.name}</strong>
//             <p className="price">
//               ${formData.billing === "monthly" ? plan.monthly : plan.yearly}/
//               {formData.billing === "monthly" ? "mo" : "yr"}
//             </p>
//           </div>
//         </label>
//       ))}
//     </div>

//     {/* ✅ Validation Message */}
//     {errors.plan && <p className="text-red-500">{errors.plan.message}</p>}
//    </div>
//    </div>

//     {/* ✅ Billing Toggle */}
//     <div className="toggle-container">
//     <label className="flex items-center justify-center gap-4 bg-gray-100 p-3 rounded-lg cursor-pointer w-full mx-auto">
//       <span className={`${formData.billing === "monthly" ? "text-blue-600 font-bold" : "text-gray-500"}`}>
//         Monthly
//       </span>
//       <div
//         className={`toggle-switch ${
//           formData.billing === "yearly" ? "active" : ""
//         }`}
//         onClick={toggleBilling} // ✅ Toggle billing on click
//       ></div>
//       <span className={`${formData.billing === "yearly" ? "text-blue-600 font-bold" : "text-gray-500"}`}>
//   Yearly
// </span>
//       </label>
//     </div>

//     {/* ✅ Navigation Buttons */}
//     <div className="flex justify-between mt-6">
//       <button
//         type="button"
//         onClick={handleGoBack}
//         className="bg-gray-300 text-black p-2 rounded"
//       >
//         Go Back
//       </button>
//       <button type="submit" className="bg-blue-500 text-black px-4 py-2 rounded-md hover:bg-blue-800 transition z-10">
//         Next Step
//       </button>
//     </div>

//   </form>

// );
// };

// export default Step2;