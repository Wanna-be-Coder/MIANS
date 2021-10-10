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
  return (
    <div>
      <button
        className={`tabButton`}
        style={Buttonstyle}
        onClick={() => handleClick(name)}
      >
        {" "}
        <h4 style={textStyle}>{name}</h4>
      </button>
    </div>
  );
};

export default TabButton;
