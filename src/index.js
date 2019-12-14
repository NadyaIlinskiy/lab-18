import React from "react";
import ReactDOM from "react-dom";
import Form from "./MadLibs.js";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <div>
        <Form className="blue" blah="blah" />
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
