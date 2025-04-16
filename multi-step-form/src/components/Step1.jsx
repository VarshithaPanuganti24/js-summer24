import React from "react";
import { useForm } from "react-hook-form";
import { useFormContext } from "../state";
import { useNavigate } from "react-router-dom";

const Step1 = () => {
  const { formData, setFormData, nextStep, step, setStep } = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues: formData });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    nextStep();
    // navigate("/step2");

    console.log("Step 1 Data:", data);
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
      <div className="mx-4 self-start rounded-xl bg-white px-6 py-8 sm:mx-0 sm:self-auto sm:px-20 sm:py-10 ">
        <h1 className="text-2xl font-bold text-secondary sm:text-3xl">
          Personal Info
        </h1>
        <p className="my-2 text-base text-gray-500 ">
          Please provide your name,email address and phone number
        </p>
        <div className="grid gap-3 pt-3 sm:gap-4 sm:pt-8">
          <div className="grid w-full grid-cols-2">
            <label className="inline-block text-sm text-secondary sm:mb-1 sm:text-base">
              Name
            </label>
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="e.g. Stephen King"
              className="col-span-full w-full rounded border border-gray-200 bg-white px-4 py-2 text-sm text-black outline-none duration-200 hover:border-primary focus:bg-gray-50 focus-visible:border-primary sm:rounded-lg sm:px-3 sm:py-3 sm:text-base font-medium placeholder:text-foreground"
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
          </div>

          <div className="grid w-full grid-cols-2">
            <label className="inline-block text-sm text-secondary sm:mb-1 sm:text-base">
              Name
            </label>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                  message: "Invalid email format",
                },
              })}
              placeholder="e.g. stephenking@lorem.com"
              className="col-span-full w-full rounded border border-gray-200 bg-white px-4 py-2 text-sm text-black outline-none duration-200 hover:border-primary focus:bg-gray-50 focus-visible:border-primary sm:rounded-lg sm:px-3 sm:py-3 sm:text-base font-medium placeholder:text-foreground"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>

          <div className="grid w-full grid-cols-2">
            <label className="inline-block text-sm text-secondary sm:mb-1 sm:text-base">
              Name
            </label>
            <input
              {...register("phone", {
                required: "Phone Number is required",
                pattern: {
                  value: /^\d{10}$/,
                  // /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4})$/,
                  message: "Enter valid 10 digit Phone Number",
                },
              })}
              placeholder="e.g. +1 234 567 890"
              className="col-span-full w-full rounded border border-gray-200 bg-white px-4 py-2 text-sm text-black outline-none duration-200 hover:border-primary focus:bg-gray-50 focus-visible:border-primary sm:rounded-lg sm:px-3 sm:py-3 sm:text-base font-medium placeholder:text-foreground"
            
            />
            {errors.phone && (
              <p className="text-red-500">{errors.phone.message}</p>
            )}
          </div>
        </div>
      </div>
      {/* Button Section */}
      
      <div className="flex flex-row-reverse justify-between bg-white px-4 py-4 sm:px-20">
        <button type="submit" className="rounded-md bg-[hsl(var(--secondary))] text-[hsl(var(--secondary-foreground))] px-4 py-3 text-base font-medium capitalize transition-colors hover:bg-secondary/80 disabled:pointer-events-none disabled:opacity-50 sm:px-6">
          next step
        </button>
      </div>
    </form>
  );
};

export default Step1;

// import React from "react";
// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// const Step1 = ({ formData, setFormData }) => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     defaultValues: formData
//   });

//   const navigate = useNavigate();

//   const onSubmit = (data) => {
//     setFormData((prev) => ({ ...prev, ...data }));
//     navigate("/step2");
//   };

//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className="mb-4">
//           <label className="block text-sm font-medium">Name</label>
//           <input
//             {...register("name", { required: "Name is required" })}
//             className="border rounded w-full p-2"
//           />
//           {errors.name && <p className="text-red-500">{errors.name.message}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium">Email</label>
//           <input
//             {...register("email", { required: "Email is required" })}
//             className="border rounded w-full p-2"
//           />
//           {errors.email && <p className="text-red-500">{errors.email.message}</p>}
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium">Phone</label>
//           <input
//             {...register("phone", { required: "Phone is required" })}
//             className="border rounded w-full p-2"
//           />
//           {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
//         </div>

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-4 py-2 rounded"
//         >
//           Next Step
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Step1;
