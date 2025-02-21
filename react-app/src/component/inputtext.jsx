import React, { useState } from "react";

function TextInput() {
  const [text, setText] = useState("");
  const [displayText, setDisplayText] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClick = () => {
    setDisplayText(text);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} placeholder="Please your text" />
      <button onClick={handleClick}>Display </button>
      <p>{displayText}</p>
    </div>
  );
}
