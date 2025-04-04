import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../state";
import { useNavigate } from "react-router-dom";

const Step4 = () => {
  const { formData, prevStep,nextStep,step,markAsSubmitted } = useFormContext();

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
  const planPrice = formData.billing === "monthly" ? selectedPlan.monthly : selectedPlan.yearly;
  console.log("planPrice",planPrice);

  const addOnsTotal = formData.addOns.reduce((sum, addOnId) => sum + addOns[addOnId].price, 0);

  //console.log("formDataaddons",formData.addOns)
  console.log("addOnsTotal",addOnsTotal);
  const totalPrice = planPrice + addOnsTotal;
  console.log("totalPrice",totalPrice)

  const onSubmit = async () => {
    markAsSubmitted();
    nextStep();
    navigate("/step5");
    
  };
  const handleGoBack = () => {
    prevStep();
    navigate(`/step${step - 1}`);  // Navigate to previous step based on current step
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
    <div className="Finishing Up">
      <h2 className="text-2xl font-bold mb-4">Finishing UP</h2>
      <p>Double-check everything looks OK  before confirming.</p>

      <div className="summary-details">
        <div className="plan-summary">
          <strong>{selectedPlan.name} ({formData.billing})</strong>
          <span>${planPrice}/{formData.billing === "monthly" ? "mo" : "yr"}</span>
         
        </div>

        <div className="addons-summary">
          {formData.addOns.map((addOnId) => (
            <div key={addOnId} className="addon-item">
              <span>{addOns[addOnId].name}</span>
              <span>+${addOns[addOnId].price}/mo</span>
            </div>
          ))}
        </div>
      </div>

      <div className="total">
        <strong>Total</strong>
        <span>${totalPrice}/mo</span>
      </div>

      {/* ✅ Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button type="button" onClick={handleGoBack} className="bg-gray-300 text-black p-2 rounded">
          Go Back
        </button>
        <button type="submit" className="bg-green-500 text-black p-2 rounded">
          Confirm
        </button>
      </div>
    </div>
    </form>
    </div>
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
