import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../state";
import { useNavigate } from "react-router-dom";

const Step4 = () => {
  const { formData, prevStep, nextStep, step, markAsSubmitted } =
    useFormContext();

  const { handleSubmit } = useForm({
    defaultValues: formData,
  });

  const navigate = useNavigate();
  const plans = {
    arcade: { name: "Arcade", monthly: 9, yearly: 90 },
    advanced: { name: "Advanced", monthly: 12, yearly: 120 },
    pro: { name: "Pro", monthly: 15, yearly: 150 },
  };

  const addOns = {
    onlineService: { name: "Online service", price: 1 },
    largerStorage: { name: "Larger storage", price: 2 },
    customProfile: { name: "Customizable profile", price: 2 },
  };

  // ✅ Calculate Total Price
  const selectedPlan = plans[formData.plan];
  //console.log("formDataplan",formData.plan)
  // console.log("selcetedplan",selectedPlan);
  // console.log("formDatabilling",formData.billing)
  const planPrice =
    formData.billing === "monthly" ? selectedPlan.monthly : selectedPlan.yearly;
  console.log("planPrice", planPrice);

  const addOnsTotal = formData.addOns.reduce(
    (sum, addOnId) => sum + (formData.billing === "yearly" ? addOns[addOnId].price*10 :addOns[addOnId].price),
    0
  );

  //console.log("formDataaddons",formData.addOns)
  console.log("addOnsTotal", addOnsTotal);
  const totalPrice = planPrice + addOnsTotal;
  console.log("totalPrice", totalPrice);

  const onSubmit = async () => {
    markAsSubmitted();
    nextStep();
    // navigate("/step5");
  };
  const handleGoBack = () => {
    prevStep();
    // navigate(`/step${step - 1}`);  // Navigate to previous step based on current step
  };

  return (
    
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4col-span-full row-start-2 row-end-[10] grid grid-rows-container sm:col-span-1 sm:row-start-auto sm:row-end-auto">
        <div className="max-w-md mx-auto p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">Finishing UP</h2>
          <p className="text-gray-500 mb-6">Double-check everything looks OK before confirming.</p>

          <div className="bg-gray-100 p-4 rounded-md">
            <div className="text-blue-900">
              <div>
              <strong>
                {selectedPlan.name} ({formData.billing})
              </strong>
              <span className="font-bold text-blue-900 ">
                ${planPrice}/{formData.billing === "monthly" ? "mo" : "yr"}
              </span>
              
              <button
              type="button"
              onClick={handleGoBack}
              className="block text-sm text-blue-500 hover:underline"
              >
              Change
              </button>

              </div>
              
            </div>

            <div className="space-y-2">
              {formData.addOns.map((addOnId) => (
                <div key={addOnId} className="flex justify-between text-sm text-gray-600">
                  <span>{addOns[addOnId].name}</span>
                  <span>+${formData.billing === "yearly" ? addOns[addOnId].price*10 :addOns[addOnId].price}/{formData.billing === "yearly" ? "yr" : "mo"}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-between px-4 pt-6 text-sm text-blue-600">
            <span className="text-gray-500">Total </span>
            <span className="text-blue-700 font-bold text-lg">${totalPrice}/{formData.billing === "yearly" ? "yr" : "mo"}</span>
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
            <button
              type="submit"
              className="bg-green-500 text-white p-2 rounded"
            >
              Confirm
            </button>
          </div>
        </div>
      </form>
    
  );
};

export default Step4;

// import React from "react";

// const Step4 = ({ prevStep }) => {
//   return (
//     <div>
//       <h2 className="text-2xl font-bold mb-4">Step 4: Summary</h2>
//       <p>Review all details before submitting.</p>

//       <div className="flex justify-between mt-6">
//         <button
//           onClick={prevStep}
//           className="bg-gray-500 text-white p-2 rounded"
//         >
//           Back
//         </button>
//         <button className="bg-green-500 text-white p-2 rounded">Submit</button>
//       </div>
//     </div>
//   );
// };

// export default Step4;
