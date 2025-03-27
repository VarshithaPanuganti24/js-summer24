import React from "react";
import { useForm } from "react-hook-form";

const Step1 = ({ nextStep }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Step 1 Data:", data);
    nextStep();
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 1: Personal Info</h2>
      <p>Please provide your name,email address and phone number</p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

      <div className="mb-4">
      <label className="block text-sm font-medium">Name</label>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Name"
          className="border p-2 w-full"
        />
        {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
        <label className="block text-sm font-medium">Email</label>
        <input
          {...register("email", { required: "Email is required",pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email format",
          }, })}
          placeholder="Email"
          className="border p-2 w-full"
        />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium">Phone Number</label>
          <input
            {...register("phonenumber", {
              required: "Phone Number is required",
              pattern: {
                value:
                  /^(\+?\d{1,3}[-.\s]?)?(\(?\d{1,4}\)?[-.\s]?)?(\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4})$/,
                message: "Enter valid 10 digit Phone Number",
              },
            })}
            placeholder="PhoneNumber"
            className="border p-2 w-full"
          />
          {errors.phonenumber && (
            <p className="text-red-500">{errors.phonenumber.message}</p>
          )}
        </div>

        <button type="submit" className="bg-blue-500 text-black p-2 rounded">
          Next Step
        </button>
      </form>
    </div>
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
