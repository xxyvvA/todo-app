import React from "react";

export default function Radio({ displayState, setDisplayState, darkMode }) {
  return (
    <div className={`${darkMode ? "dark" : "light"} radio`}>
      <input
        className="radioInput"
        type="radio"
        checked={displayState === "all"}
        onChange={() => setDisplayState("all")}
        id="all"
        value="all"
        name="AAC"
      />
      <label htmlFor="all">All</label>

      <input
        className="radioInput"
        type="radio"
        checked={displayState === "active"}
        onChange={() => setDisplayState("active")}
        id="active"
        value="active"
        name="AAC"
      />
      <label htmlFor="active">Active</label>

      <input
        className="radioInput"
        type="radio"
        checked={displayState === "completed"}
        onChange={() => setDisplayState("completed")}
        id="completed"
        value="completed"
        name="AAC"
      />
      <label htmlFor="completed">Completed</label>
    </div>
  );
}
