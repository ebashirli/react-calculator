import React from "react";
import "./App.scss";
import Result from "./components/Result/Result";
import Keyboard from "./components/Keyboard/Keyboard";
const App = () => {
  return (
    <div className="container">
      <div id="app">
        <Result />
        <Keyboard />
      </div>
    </div>
  );
};

export default App;
