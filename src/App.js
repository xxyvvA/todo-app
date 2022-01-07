import React, { useState } from "react";
import Box from "./Box";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div>
      <div>
        <h1 className={darkMode ? "dark" : "light"}>TODO</h1>
        {/* <LightDark/> */}
      </div>

      <Box darkMode={darkMode} />

      <p className={darkMode ? "dark" : "light"}>Drag and drop to reorder list</p>
    </div>
  );
}
