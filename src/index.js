import React from "react";
import ReactDOM from "react-dom";
import MadLibs from "./MadLibs.js";

import "./styles.css";

function App() {
  let mycount = -1;
  return (
    <div className="App">
      <div>
        <MadLibs className="blue" blah="blah" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
