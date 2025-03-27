import React from "react";

const Step4 = ({ prevStep }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Step 4: Summary</h2>
      <p>Review all details before submitting.</p>

      <div className="flex justify-between mt-6">
        <button
          onClick={prevStep}
          className="bg-gray-500 text-white p-2 rounded"
        >
          Back
        </button>
        <button className="bg-green-500 text-white p-2 rounded">Submit</button>
      </div>
    </div>
  );
};

export default Step4;
