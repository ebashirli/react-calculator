import React from "react";
import "./Keyboard.scss";
import KeyboardBtn from "./Button/KeyboardBtn";
import { buttonsData } from "../../data/data";

const Keyboard = ({ state, dispatch }) => {
  return (
    <div id="keyboard">
      <div className="row">
        <KeyboardBtn
          key={buttonsData.clear.id}
          mission={buttonsData.clear.mission}
          value={buttonsData.clear.value}
          clickHandler={() => {
            dispatch({ type: "clear" });
          }}
        />
        {buttonsData.operators.map((obj) => (
          <KeyboardBtn
            key={obj.id}
            mission={obj.mission}
            icon={<obj.icon />}
            clickHandler={() =>
              dispatch({ type: obj.mission, payload: obj.value })
            }
          />
        ))}
      </div>
      <div className="row">
        {buttonsData.values.slice(0, 10).map((obj) => (
          <KeyboardBtn
            key={obj.id}
            mission={obj.mission}
            value={obj.value}
            clickHandler={() =>
              dispatch({ type: obj.mission, payload: obj.value })
            }
          />
        ))}
      </div>
      <div className="row">
        <KeyboardBtn
          key={buttonsData.result.id}
          mission={buttonsData.result.mission}
          value={buttonsData.result.value}
          clickHandler={() => dispatch({ type: buttonsData.result.mission })}
        />
        <KeyboardBtn
          key={buttonsData.dot.id}
          mission={buttonsData.dot.mission}
          value={buttonsData.dot.value}
          clickHandler={() => dispatch({ type: buttonsData.dot.mission })}
        />
      </div>
    </div>
  );
};

export default Keyboard;
