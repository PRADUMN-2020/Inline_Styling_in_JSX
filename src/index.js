import React from "react";
import ReactDOM from "react-dom";
const customStyling = {
  color: "red",
  border: "1px solid black",
  fontSize: "60px",
  backgroundColor: "cyan"
};

customStyling.backgroundColor = "black";

ReactDOM.render(
  <h1 style={customStyling}>Hello World!</h1>,
  document.getElementById("root")
);
