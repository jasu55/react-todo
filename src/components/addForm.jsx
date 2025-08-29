import React, { useState } from "react";

export function AddForm({ setTodos, inputValue, setInputValue }) {
  const handleOnChange = (event) => setInputValue(event.target.value);

  const handleOnClick = () => {
    setInputValue("");
    setTodos((previous) => [
      ...previous,
      { text: inputValue, id: Date.now(), isDone: false },
    ]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="addd..."
        value={inputValue}
        onChange={handleOnChange}
      ></input>
      <button onClick={handleOnClick}>Add</button>
    </div>
  );
}
