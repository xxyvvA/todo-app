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
    <div className="actionBar">
      <p className={darkMode ? "dark" : "light"}>{completed.length} items left</p>

      <Radio displayState={displayState} setDisplayState={setDisplayState} darkMode={darkMode} />

      <button
        className={`${darkMode ? "dark" : "light"} clearComp`}
        onClick={() => {
          settodoArray(todoArray.filter((item) => !item[1]));
        }}
      >
        Clear Completed
      </button>

      <button
        className={`${darkMode ? "dark" : "light"} clearAll`}
        onClick={() => {
          settodoArray([]);
        }}
      >
        Clear All
      </button>
    </div>
  );
}
