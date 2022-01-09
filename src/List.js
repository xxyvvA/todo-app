import React from "react";

export default function List({ todoArray, settodoArray, displayState, darkMode }) {
  return (
    <ul className="list">
      {todoArray.map((listItem, index) =>
        displayState === "all" ? (
          <ListItem
            todoArray={todoArray}
            settodoArray={settodoArray}
            darkMode={darkMode}
            listItem={listItem}
            index={index}
          />
        ) : displayState === "active" && !listItem[1] ? (
          <ListItem
            todoArray={todoArray}
            settodoArray={settodoArray}
            darkMode={darkMode}
            listItem={listItem}
            index={index}
          />
        ) : displayState === "completed" && listItem[1] ? (
          <ListItem
            todoArray={todoArray}
            settodoArray={settodoArray}
            darkMode={darkMode}
            listItem={listItem}
            index={index}
          />
        ) : null
      )}
    </ul>
  );
}

const ListItem = ({ todoArray, settodoArray, darkMode, listItem, index }) => {
  const check = () => {
    const newArr = [...todoArray];
    newArr[index][1] = !newArr[index][1];
    settodoArray(newArr);
  };

  return (
    <li className={`${darkMode ? "dark" : "light"} listItem`} key={index}>
      <input
        className="checkbox"
        type="checkbox"
        onChange={check}
        checked={listItem[1]}
        id={index}
        hidden
      />

      <div className={`${listItem[1] ? "gradient" : "transparent"} spacer`} onClick={check}>
        {listItem[1] && <img src="./todo-images/icon-check.svg" />}
      </div>

      <label className={`${darkMode ? "dark" : "light"} checkedlabel`} htmlFor={index}>
        {listItem[1] ? <strike className="checkLabel">{listItem[0]}</strike> : listItem[0]}
      </label>
    </li>
  );
};
