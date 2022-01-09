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
    <div
      className={`${darkMode ? "dark" : "light"} actionBar ${!todoArray.length ? "border" : null}`}
    >
      <p className={darkMode ? "dark" : "light"}>{completed.length} items left</p>

      <Radio displayState={displayState} setDisplayState={setDisplayState} darkMode={darkMode} />
      <div className="buttons">
        <button
          className={`${darkMode ? "dark" : "light"} clear-comp`}
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
    </div>
  );
}
