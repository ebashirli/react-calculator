import React from "react";
import "./Result.scss";
const Result = () => {
  return (
    <div className="result-group">
      <span id="result">1984</span>
      <small className={`alert`}>exceeded the process limit</small>
    </div>
  );
};

export default Result;
