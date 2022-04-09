import React from "react";
import { StyledCell } from "./styles/StyledCell";

const Cell = ({ type }) => {
  return (
    <div
      style={{
        border: "white",
        background: "black",
        height: "15px",
        width: "15px",
      }}
    ></div>
  );
};
export default Cell;
