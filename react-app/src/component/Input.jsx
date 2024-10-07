import React, { forwardRef } from "react";
import { ref } from "yup";

const Input = forwardRef((props, ref) => {
  return (
    <input
      className="py-1 px-3 border-2 border-black rounded-md"
      {...props}
      ref={ref}
    />
  );
});

export default Input;
