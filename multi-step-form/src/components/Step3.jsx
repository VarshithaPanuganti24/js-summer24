import React from 'react'
import { useForm } from 'react-hook-form';
import { useFormContext } from '../state';

const Step3 = () => {
   const { formData, nextStep, prevStep ,updateAddOns} = useFormContext();
    
    const { handleSubmit, register, } = useForm({
      defaultValues: formData,
    });

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
    };
  return (

    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <h2 className="text-2xl font-bold mb-4">Pick add-ons</h2>
    <p>Add-ons help enhance your gaming experience.</p>

    <div className="addons">
        {addOns.map((addon) => (
          <label key={addon.id} className={`addon ${formData.addOns.includes(addon.id) ? "selected" : ""}`}>
            <input
              type="checkbox"
              name="addOns"
              value={addon.id}
              checked={formData.addOns.includes(addon.id)}
              onChange={handleCheckboxChange} // ✅ Update state
              // {...register("addOns")}
            />
            <div className="addon-content">
              <strong>{addon.name}</strong>
              <p>{addon.description}</p>
              <span>+${addon.price}/mo</span>
            </div>
          </label>
        ))}
      </div>

      <div className="flex justify-between mt-6">
        <button type="button" onClick={prevStep} className="bg-gray-300 text-black p-2 rounded">
          Go Back
        </button>
        <button type="submit" className="bg-blue-500 text-black p-2 rounded">
          Next Step
        </button>
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
