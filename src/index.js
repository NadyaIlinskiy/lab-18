import React from "react";
import ReactDOM from "react-dom";
import MadLibs from "./MadLibs.js";
import "./styles.css";

function App() {
  return <MadLibs />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
