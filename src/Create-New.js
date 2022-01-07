import React from "react";

export default function CreateNew({ settodoArray, todoArray, listItem, setListItem, darkMode }) {
  const enterNew = (event) => {
    if (event.keyCode === 13 && listItem.length !== 0) {
      //&& !todoArray.includes(listItem)) {
      setListItem("");
      settodoArray([...todoArray, listItem]);
    }
  };

  return (
    <div>
      <input
        className={darkMode ? "dark" : "light"}
        type="text"
        placeholder="Create a new todo..."
        onChange={(event) => {
          setListItem(event.target.value);
        }}
        onKeyDown={enterNew}
        value={listItem}
      />

      {todoArray.includes(listItem) && (
        <p>You already have this in your list. Are you sure you want to add it again?</p>
      )}
    </div>
  );
}
