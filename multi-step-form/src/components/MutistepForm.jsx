import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./SideBar";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";

const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-3/4 p-6">
          <Routes>
            <Route
              path="/"
              element={<Step1 formData={formData} setFormData={setFormData} />}
            />
            <Route path="/step2" element={<Step2 />} />
            <Route path="/step3" element={<Step3 />} />
            <Route path="/step4" element={<Step4 />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default MultiStepForm;
