import React from "react";
import { mockComponent } from "react-dom/cjs/react-dom-test-utils.production.min";

export default function CreateNew({ settodoArray, todoArray, listItem, setListItem, darkMode }) {
  const enterNew = (event) => {
    if (event.keyCode === 13 && listItem.length !== 0) {
      setListItem("");
      settodoArray([...todoArray, [listItem, false]]);
    }
  };

  return (
    <div className="newListItem">
      <input
        className={`${darkMode ? "dark" : "light"} createNew`}
        type="text"
        placeholder="Create a new todo..."
        onChange={(event) => {
          setListItem(event.target.value);
        }}
        onKeyDown={enterNew}
        value={listItem}
      />

      {todoArray.find((item) => item[0] === listItem) && (
        <p className={`${darkMode ? "dark" : "light"} alert`}>
          You already have this in your list. Are you sure you want to add it again?
        </p>
      )}
    </div>
  );
}
