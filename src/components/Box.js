import "./Box.css";
import background from "../images/background.png";
import boximg from "../images/box.png";
import { useEffect, useState } from "react";

function Box(props) {
  const handleClickBox = () => {
    if (props.boxImage === 1) {
      props.setPopupEnabled(true);
    }
  };

  return props.boxImage === 1 ? (
    <div
      className="background"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div
        className="boximg"
        onClick={handleClickBox}
        style={{ backgroundImage: `url(${boximg})` }}
      />
    </div>
  ) : (
    <img className="boxgif" src={props.boxgif} />
  );
}

export default Box;
