import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    <>
      <button onClick={() => window.open("https://example.com", "_blank")}>
        Open Safari
      </button>
    </>
  );
}

export default App;
