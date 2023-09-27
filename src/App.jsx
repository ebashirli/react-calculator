import React, { useReducer } from "react";
import "./App.scss";
import Result from "./components/Result/Result";
import Keyboard from "./components/Keyboard/Keyboard";
import { computer, getCurrent } from "./helpers/helpers";

const initialArg = {
  newNumber: true,
  current: "0",
  result: "0",
  operator: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "value":
      let current =
        "" + getCurrent(action.payload, state.current, state.newNumber);

      return {
        ...state,
        newNumber: false,
        current,
      };
    case "operator":
      let result = "" + computer(state.result, state.operator, state.current);

      return {
        ...state,
        newNumber: true,
        current: result,
        result: action.payload === "=" ? 0 : result,
        operator: action.payload,
      };
    case "clear":
      return initialArg;
    default:
      throw new Error();
  }
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialArg);
  return (
    <div className="container">
      <div id="app">
        <Result state={state} />
        <Keyboard state={state} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default App;

{
  /*
action.payload === "."
            ? `${state.current}`.includes(".")
              ? +`${state.current}`
              : `${state.current}${action.payload}`
            :
*/
}
