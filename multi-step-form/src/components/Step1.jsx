import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Step1 = ({ formData, setFormData }) => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: formData
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    navigate("/step2");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Personal Info</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label className="block text-sm font-medium">Name</label>
          <input
            {...register("name", { required: "Name is required" })}
            className="border rounded w-full p-2"
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Email</label>
          <input
            {...register("email", { required: "Email is required" })}
            className="border rounded w-full p-2"
          />
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Phone</label>
          <input
            {...register("phone", { required: "Phone is required" })}
            className="border rounded w-full p-2"
          />
          {errors.phone && <p className="text-red-500">{errors.phone.message}</p>}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Next Step
        </button>
      </form>
    </div>
  );
};

export default Step1;
