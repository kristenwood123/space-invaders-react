export const GRID_WIDTH = 15;
export const GRID_HEIGHT = 15;

export const createGrid = () =>
  Array.from(Array(GRID_HEIGHT), () =>
    new Array(GRID_WIDTH).fill([0, "clear"])
  );

console.log(createGrid());
