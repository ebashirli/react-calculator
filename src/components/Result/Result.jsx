import React from "react";
import "./Result.scss";
const Result = ({ state }) => {
  return (
    <div className="result-group">
      <span id="result">{state.current}</span>
      <small className={`alert`}>exceeded the process limit</small>
    </div>
  );
};

export default Result;
