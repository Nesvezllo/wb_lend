import React, { useReducer } from "react";
import "../Styles/box.scss";

import box from "../assets/img/body2.png";
import boxLid from "../assets/img/cap2.png";

const init_state = {
  move: "move",
  jump: "",
  rotated: "",
  rotating: ""
};
export default function GiftBoxAnimation({boxHandleClick, openDialog}) {
  const [state, setState] = useReducer(
    (state, new_state) => ({
      ...state,
      ...new_state
    }),
    init_state
  );

  const { move, rotating, rotated, jump } = state;

  function animate() {

    let isDone = rotated === "rotated" ? true : false;

    if (!isDone) {
      setState({ rotating: "rotating" });
      setTimeout(() => {
        setState({ jump: "jump" });
      }, 300);
      setTimeout(() => {
        setState({ rotated: "rotated" });
      }, 1000);
    } else {
      setState(init_state);
    }
    let moving = move === "move" ? "" : "move";
    setState({ move: moving });
  }

  function handleEvent(e) {
    animate()
    boxHandleClick()
    // openDialog()
  }

  return (
      <div>
          <div className="img-container" onClick={() => handleEvent()}>
            <button className="box">
              <img src={box} alt="box" />
            </button>
            <img
              className={`lid ${move} ${rotating} ${rotated}`}
              src={boxLid}
              alt="box-lid"
            />
        </div>
      </div>
  );
}
