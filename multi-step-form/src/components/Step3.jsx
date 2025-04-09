import React from 'react'
import { useForm } from 'react-hook-form';
import { useFormContext } from '../state';
import { useNavigate } from "react-router-dom";

const Step3 = () => {
   const { formData, nextStep, prevStep ,step,updateAddOns,} = useFormContext();
    
    const { handleSubmit, register, } = useForm({
      defaultValues: formData,
    });
    const navigate = useNavigate();

    const addOns = [
      { id: "onlineService", name: "Online service", price: 1, description: "Access to multiplayer games" },
      { id: "largerStorage", name: "Larger storage", price: 2, description: "Extra 1TB of cloud save" },
      { id: "customProfile", name: "Customizable profile", price: 2, description: "Custom theme on your profile" },
    ];
    
    const handleCheckboxChange = (event) => {
      const { value, checked } = event.target;
      updateAddOns(value,checked);
     
    };

    const onSubmit = (data) => {
      nextStep();
      // navigate("/step4");
      console.log("Step 3 Data:", data);
    };

    const handleGoBack = () => {
      prevStep();
      // navigate(`/step${step - 1}`);  // Navigate to previous step based on current step
    };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="col-span-full row-start-2 row-end-[10] grid grid-rows-container sm:col-span-1 sm:row-start-auto sm:row-end-auto">
    <div className="max-w-md mx-auto p-6 rounded-2xl shadow">
    <h2 className="text-2xl font-bold mb-4">Pick add-ons</h2>
    <p>Add-ons help enhance your gaming experience.</p>

    <div className="space-y-3">
        {addOns.map((addon) => (
          <label 
          key={addon.id} 
          className={`flex items-center justify-between border rounded-lg p-4 cursor-pointer transition hover:border-blue-500
           ${formData.addOns.includes(addon.id) ? "selected" : ""}`}>

            <div className="flex items-start gap-4">
            <input
              type="checkbox"
              name="addOns"
              value={addon.id}
              checked={formData.addOns.includes(addon.id)}
              onChange={handleCheckboxChange} // ✅ Update state
              className='mt-2'
              // {...register("addOns")}
            />
            <div className="text-left">
              <p className="font-semibold text-blue-900 text-sm">{addon.name}</p>
              <p className="text-xs text-gray-500">{addon.description}</p>
            </div>

            </div>

              <span className="text-sm text-blue-600 whitespace-nowrap">
             +${formData.billing === "yearly" ? addon.price * 10 : addon.price}/{formData.billing === "yearly" ? "yr" : "mo"}
              </span>

          </label>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button type="button" onClick={handleGoBack} className="bg-gray-300 text-white p-2 rounded">
          Go Back
        </button>
        <button type="submit" className="bg-blue-500 text-white  p-2 rounded"
  >
          Next Step
        </button>
      </div>
        </div>
    </form>
    
  );
};

export default Step3

// import React from "react";

// const Step3 = ({ nextStep, prevStep }) => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Step 3: Add-Ons</h2>
//       <div className="space-y-4">
//         <div className="p-4 border rounded">Addon 1</div>
//         <div className="p-4 border rounded">Addon 2</div>
//       </div>

//       <div className="flex justify-between mt-6">
//         <button
//           onClick={prevStep}
//           className="bg-gray-500 text-white p-2 rounded"
//         >
//           Back
//         </button>
//         <button
//           onClick={nextStep}
//           className="bg-blue-500 text-white p-2 rounded"
//         >
//           Next Step
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Step3;
