
import React from "react";
export function Input({ type = "text", value, onChange, placeholder }) {
    return (
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 border rounded-md w-full"
      />
    );
  }
  