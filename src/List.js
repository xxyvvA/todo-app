import React from "react";

export default function List({ todoArray, completed, setcompleted, displayState, darkMode }) {
  const displayedArray =
    displayState === "all"
      ? todoArray
      : displayState === "completed"
      ? completed.keys()
      : todoArray.filter((item) => !completed.includes(item));

  return (
    <div>
      <ul>
        {displayedArray.map((listItem, index) => (
          <li className={darkMode ? "dark" : "light"} key={index}>
            <input
              type="checkbox"
              onChange={() => {
                if (completed.includes(itemIndex)) {
                  setcompleted(completed.filter((item) => item !== itemIndex));
                } else {
                  setcompleted([...completed, itemIndex]);
                }
              }}
              checked={completed.includes(itemIndex)}
              id={index}
            />
            <label className={darkMode ? "dark" : "light"} htmlFor={index}>
              {completed.includes(itemIndex) ? <strike>{listItem}</strike> : listItem}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
