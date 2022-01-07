import React from "react";
import Radio from "./Radio";

export default function ActionBar({
  todoArray,
  completed,
  settodoArray,
  setcompleted,
  displayState,
  setDisplayState,
  darkMode,
}) {
  return (
    <div>
      <p className={darkMode ? "dark" : "light"}>
        {todoArray.length - completed.length} items left
      </p>

      <Radio displayState={displayState} setDisplayState={setDisplayState} darkMode={darkMode} />

      <button
        className={darkMode ? "dark" : "light"}
        onClick={() => {
          settodoArray(todoArray.filter((item) => !completed.includes(item)));
          setcompleted([]);
        }}
      >
        Clear Completed
      </button>

      <button
        className={darkMode ? "dark" : "light"}
        onClick={() => {
          settodoArray([]);
          setcompleted([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
}
