import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../state";
import { useNavigate } from "react-router-dom";

const Step3 = () => {
  const { formData, nextStep, prevStep, step, updateAddOns } = useFormContext();

  const { handleSubmit, register } = useForm({
    defaultValues: formData,
  });
  const navigate = useNavigate();

  const addOns = [
    {
      id: "onlineService",
      name: "Online service",
      price: 1,
      description: "Access to multiplayer games",
    },
    {
      id: "largerStorage",
      name: "Larger storage",
      price: 2,
      description: "Extra 1TB of cloud save",
    },
    {
      id: "customProfile",
      name: "Customizable profile",
      price: 2,
      description: "Custom theme on your profile",
    },
  ];

  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    updateAddOns(value, checked);
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
  "
    >
      <div className="max-w-md mx-auto p-6 rounded-2xl shadow">
        <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
          Pick add-ons
        </h2>
        <p className="my-2 text-base text-gray-500">
          Add-ons help enhance your gaming experience.
        </p>

        <div className="grid gap-3 pt-3 sm:gap-4 sm:pt-8">
          {addOns.map((addon) => {
            const isChecked = formData.addOns.includes(addon.id);
            return (
              <label
                key={addon.id}
                className={`grid grid-cols-[max-content_1fr_max-content] items-center gap-4 sm:gap-5 rounded-lg border px-4 py-4 sm:px-6 transition hover:cursor-pointer hover:border-blue-500 focus-visible:border-blue-500 ${
                  isChecked ? "border-[hsl(var(--primary))] bg-[hsl(var(--muted-foreground))]" : "border-foreground bg-transparent"
                }`}
              >
                <div
                  className={`grid aspect-square w-5 h-5 place-content-center rounded border p-1 transition 
  ${isChecked ? "bg-[hsl(var(--primary))] border-[hsl(var(--foreground))]" : "border-gray-400"}`}
                >
                  {isChecked && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="12"
                      height="9"
                      viewBox="0 0 12 9"
                    >
                      <path
                        fill="none"
                        stroke="#FFF"
                        strokeWidth="2"
                        d="m1 4 3.433 3.433L10.866 1"
                      />
                    </svg>
                  )}
                </div>

                {/* <div className="text-left"> */}
                  <p className="text-xs text-[hsl(var(--foreground))] sm:text-sm">
                    <strong className="text-sm text-[hsl(var(--secondary))] sm:text-base">
                      {addon.name}
                    </strong>
                    <br />
                    {addon.description}
                  </p>
                {/* </div> */}

                <span className="text-xs text-[hsl(var(--primary))] sm:text-sm ">
                  +$
                  {formData.billing === "yearly"
                    ? addon.price * 10
                    : addon.price}
                  /{formData.billing === "yearly" ? "yr" : "mo"}
                </span>

                <input
                  type="checkbox"
                  name="addOns"
                  value={addon.id}
                  checked={isChecked}
                  onChange={handleCheckboxChange}
                  className="hidden"
                />
              </label>
            );
          })}
        </div>
        </div>
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

export default Step3;

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

{
  /* <form onSubmit={handleSubmit(onSubmit)} className="
    col-span-full 
    row-start-2 
    row-end-[10] 
    grid 
    grid-rows-[1fr_auto] 
    sm:col-span-1 
    sm:row-start-auto 
    sm:row-end-auto
  ">
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
}; */
}
