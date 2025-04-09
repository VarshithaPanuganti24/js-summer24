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
      <form onSubmit={handleSubmit(onSubmit)} className="col-span-full row-start-2 row-end-[10] grid grid-rows-container sm:col-span-1 sm:row-start-auto sm:row-end-auto">
        <div className="max-w-md mx-auto p-6 rounded-2xl shadow">
      <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
      <p className="text-sm text-gray-500 mb-6">Please provide your name,email address and phone number</p>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            placeholder="Name"
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            })}
            placeholder="Email"
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">Phone Number</label>
          <input
            {...register("phone", {
              required: "Phone Number is required",
              pattern: {
                value:/^\d{10}$/,
                  // /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4})$/,
                message: "Enter valid 10 digit Phone Number",
              },
            })}
            placeholder="Phone Number"
            className="mt-1 w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500"
          />
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>
        </div>
          <div className="flex flex-row-reverse justify-between bg-white px-4 py-4 sm:px-20">
        <button type="submit" className="bg-blue-500  text-white p-2 rounded">
          Next Step
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
