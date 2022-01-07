import React from "react";
import Radio from "./Radio";

export default function ActionBar({
  todoArray,
  completed,
  settodoArray,
  displayState,
  setDisplayState,
  darkMode,
}) {
  return (
    <div>
      <p className={darkMode ? "dark" : "light"}>{completed.length} items left</p>

      <Radio displayState={displayState} setDisplayState={setDisplayState} darkMode={darkMode} />

      <button
        className={darkMode ? "dark" : "light"}
        onClick={() => {
          settodoArray(todoArray.filter((item) => !item[1]));
        }}
      >
        Clear Completed
      </button>

      <button
        className={darkMode ? "dark" : "light"}
        onClick={() => {
          settodoArray([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
}
