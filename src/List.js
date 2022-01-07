import React from "react";

export default function List({ todoArray, settodoArray, displayState, darkMode }) {
  return (
    <div>
      <ul>
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
    </div>
  );
}

const ListItem = ({ todoArray, settodoArray, darkMode, listItem, index }) => {
  return (
    <li className={`${darkMode ? "dark" : "light"} list`} key={index}>
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => {
          const newArr = [...todoArray];
          newArr[index][1] = !newArr[index][1];
          settodoArray(newArr);
        }}
        checked={listItem[1]}
        id={index}
      />

      <label className={`${darkMode ? "dark" : "light"} checkLabel`} htmlFor={index}>
        {listItem[1] ? <strike>{listItem[0]}</strike> : listItem[0]}
      </label>
    </li>
  );
};
