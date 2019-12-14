import React from "react";
import ReactDOM from "react-dom";
import MadLibs from "./MadLibs.js";
import "./styles.css";

/**
 * App function
 * @returns MadLibs component
 */
function App() {
  return <MadLibs />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
