import React from "react";

const Step2 = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 2: Select Plan</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">Basic Plan</div>
        <div className="p-4 border rounded">Premium Plan</div>
      </div>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Back
        </button>
        <button
          onClick={nextStep}
          className="bg-blue-500 text-white p-2 rounded"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Step2;
