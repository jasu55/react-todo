import React, { useState } from "react";

export function AddForm() {
  const [inputValue, setInputValue] = useState("");

  const handleOnChange = (event) => setInputValue(event.target.value);
  console.log(setInputValue);
  return (
    <div>
      <input
        type="text"
        placeholder="addd..."
        value={inputValue}
        onChange={handleOnChange}
      ></input>
      <button>Add</button>
    </div>
  );
}
