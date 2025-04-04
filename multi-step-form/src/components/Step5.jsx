import { useEffect } from "react";
import { useFormContext } from "../state";
import { useNavigate } from "react-router-dom";

const Step5 = () => {
  const { isSubmitted, setStep } = useFormContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSubmitted) {
      setStep(1);
      navigate("/step1");
    }
  }, []);

  return (
    <div className="thank-you">
      <h2 className="text-2xl font-bold">Thank you!</h2>
      <p>We appreciate you confirming your subscription. Have a great day!</p>
    </div>
  );
};

export default Step5;
