import React from "react";
import { StyledCell } from "./styles/StyledCell";

const Cell = ({ type }) => {
  return (
    <div style={{ color: "white" }}>
      <StyledCell type={"L"} color={"black"}>
        Cell
      </StyledCell>
    </div>
  );
};
export default Cell;
