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
    (sum, addOnId) =>
      sum +
      (formData.billing === "yearly"
        ? addOns[addOnId].price * 10
        : addOns[addOnId].price),
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
          Finishing up
        </h1>
        <p className="my-2 text-base text-[hsl(var(--foreground))] ">
          Double-check everything looks OK before confirming.
        </p>

        <div className="grid gap-3 pt-3 sm:gap-4 sm:pt-8">
          <div className="grid gap-2 rounded-lg bg-[hsl(var(--muted-foreground))]  p-4 sm:gap-4 sm:p-6">

            <div className="grid grid-cols-[1fr_max-content] items-center gap-5 ">
              <p>
                <strong className="text-sm capitalize text-[hsl(var(--secondary))] sm:text-base">
                  {selectedPlan.name} ({formData.billing})
                </strong>
                <br />
                <button
                  type="button"
                  onClick={handleGoBack}
                  className="whitespace-nowrap underline rounded-md px-4 py-2 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 hover:bg-[hsl(var(--muted-foreground))]/20  font-medium capitalize text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] sm:px-2"
          >
                
                  Change
                </button>
              </p>
              <span className="text-sm font-bold text-[hsl(var(--secondary))] sm:text-base">
                ${planPrice}/{formData.billing === "monthly" ? "mo" : "yr"}
              </span>
            </div>
            <hr />
            <div className="grid  gap-5 text-sm">
            {formData.addOns.map((addOnId) => (
              <div
                key={addOnId}
                 className=" grid grid-cols-[1fr_max-content] items-center gap-2 "
              >
                <span className="text-[hsl(var(--foreground))] ">{addOns[addOnId].name}</span>
                <span className="text-[hsl(var(--secondary))]">
                  +$
                  {formData.billing === "yearly"
                    ? addOns[addOnId].price * 10
                    : addOns[addOnId].price}
                  /{formData.billing === "yearly" ? "yr" : "mo"}
                </span>
              </div>
            ))}
          </div>
          </div>

          
        </div>

        <div className="grid grid-cols-[1fr_max-content] gap-5 px-4 pt-6 text-sm text-foreground sm:p-6">
          <span>Total (per {formData.billing === "yearly" ? "year" : "month"})</span>
          <span className="text-lg font-bold text-[hsl(var(--primary))] sm:text-xl">
            +${totalPrice}/{formData.billing === "yearly" ? "yr" : "mo"}
          </span>
        </div>
        
      </div>

      {/* ✅ Navigation Buttons */}
      <div className="flex flex-row-reverse justify-between bg-white px-4 py-4 sm:px-20">
        <button
          type="submit"
          className="rounded-md  px-4 py-3 text-sm  transition-colors disabled:pointer-events-none disabled:opacity-50  bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] hover:bg-[hsl(var(--primary))]/90  font-medium capitalize sm:px-6"
        >
          Confirm
        </button>

        <button
          type="button"
          onClick={handleGoBack}
          className="whitespace-nowrap rounded-md px-4 py-2 text-sm transition-colors disabled:pointer-events-none disabled:opacity-50 hover:bg-[hsl(var(--muted-foreground))]/20  font-medium capitalize text-[hsl(var(--foreground))] hover:text-[hsl(var(--secondary))] sm:px-2">
          Go Back
        </button>
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