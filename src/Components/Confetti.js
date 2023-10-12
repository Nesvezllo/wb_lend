import React, { Fragment } from "react";
import s from "../Styles/confetti.scss";
import Confetti from 'react-confetti'

let count = 200;
let points = [];

const ConfettiScreen = ({ open }) => {
  // let confetti = generatePoints();

  // function generatePoints() {
  //   points = [];

  //   for (let i = 0; i < count; i++) {
  //     points.push(<p className={`${open ? "animated" : ""}`} key={i} />);
  //   }
  //   return points;
  // }

  return (
    <Fragment>
      {/* <div className={`confetti ${open ? "animated" : ""}`}>
        {confetti.map(c => c)}
      </div> */}
      <Confetti style={{ zIndex: 50 }}/>
    </Fragment>
  );
}

export default ConfettiScreen;
