/* eslint-disable no-script-url */
import React from "react";

const TabButton = ({ name, handleClick, selected }) => {
  let Buttonstyle = {};
  let textStyle = {};
  if (name === selected) {
    Buttonstyle = {
      backgroundColor: "#50505f",
    };
    textStyle = {
      color: "#fafeff",
    };
  }
  const mobile = window.screen.width <= 600;
  return (
    <div>
      <a href={mobile ? "#description" : "javascript:void(0)"}>
        <button
          className={`tabButton`}
          style={Buttonstyle}
          onClick={() => handleClick(name)}
        >
          {" "}
          <h4 style={textStyle}>{name}</h4>
        </button>
      </a>
    </div>
  );
};

export default TabButton;
