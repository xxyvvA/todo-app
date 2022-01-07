import React, { useState } from "react";
import CreateNew from "./Create-New";
import List from "./List";
import ActionBar from "./ActionBar";

export default function Box({ darkMode }) {
  const [todoArray, settodoArray] = useState([]);
  const [listItem, setListItem] = useState("");
  const [displayState, setDisplayState] = useState("all");

  return (
    <>
      <CreateNew
        todoArray={todoArray}
        settodoArray={settodoArray}
        listItem={listItem}
        setListItem={setListItem}
        darkMode={darkMode}
      />

      <List
        todoArray={todoArray}
        settodoArray={settodoArray}
        displayState={displayState}
        darkMode={darkMode}
      />

      <ActionBar
        todoArray={todoArray}
        settodoArray={settodoArray}
        completed={todoArray.filter((item) => !item[1])}
        displayState={displayState}
        setDisplayState={setDisplayState}
        darkMode={darkMode}
      />
    </>
  );
}
