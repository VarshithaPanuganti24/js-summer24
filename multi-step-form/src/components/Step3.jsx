import React from "react";

const Step3 = ({ nextStep, prevStep }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 3: Add-Ons</h2>
      <div className="space-y-4">
        <div className="p-4 border rounded">Addon 1</div>
        <div className="p-4 border rounded">Addon 2</div>
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

export default Step3;
