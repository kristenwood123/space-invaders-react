import React from "react";
import Grid from "./Grid";
import StartButton from "./StartButton";
import Display from "./Display";
import { createGrid } from "./data";
import { StyledGame, StyledGameWrapper } from "./styles/StyledWrapper";

const Game = () => {
  return (
    <StyledGameWrapper>
      <StyledGame>
        <Grid grid={createGrid()} />
        <aside>
          <Display text="Score" />
        </aside>
        <StartButton />
      </StyledGame>
    </StyledGameWrapper>
  );
};

export default Game;
