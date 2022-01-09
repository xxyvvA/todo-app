import React, { useState } from "react";
import Box from "./Box";
import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "dark" : "light"} root2`}>
      <div className={`${darkMode ? "dark" : "light"} app`}>
        <div className="title">
          <h1 className={darkMode ? "dark" : "light"}>T O D O</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            <img src={darkMode ? "./todo-images/icon-sun.svg" : "./todo-images/icon-moon.svg"} />
          </button>
        </div>

        <Box darkMode={darkMode} />

        {/* <p className={`${darkMode ? "dark" : "light"} dnd`}>Drag and drop to reorder list</p> */}
      </div>
    </div>
  );
}
