import React from "react";
import Grid from "./Grid";
import StartButton from "./StartButton";
import Display from "./Display";
import { createGrid } from "./data";
import { StyledWrapper } from "./styles/StyledWrapper";
import { StyledGame } from "./styles/StyledGame";

const Game = () => {
  return (
    <StyledGame>
      <Grid grid={createGrid()} />
      <aside>
        <Display text="Score" />
      </aside>
      <StartButton />
    </StyledGame>
  );
};

export default Game;
