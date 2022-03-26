import React, { useState, useEffect } from "react";

import "./styles.css";
import { numbers } from "./data";
import Squares from "./Squares";

function App() {
  const [squares, setSquares] = useState(numbers);
  const [goingRight, setGoingRight] = useState(true);
  let [direction, setDirection] = useState(1);
  let [currentShooterIndex, setCurrentShooterIndex] = useState(217);
  let [invaders, setInvaders] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39,
  ]);

  const [status, setStatus] = useState("");
  let width = 15;
  let invadersId;

  function moveInvaders(invaders) {
    const leftEdge = invaders[0] % width === 0;
    const rightEdge = invaders[invaders.length - 1] % width === width - 1;

    if (rightEdge && goingRight) {
      setDirection(-1);
      setGoingRight(!goingRight);
    }

    if (leftEdge && !goingRight) {
      setDirection(1);
      setGoingRight(!goingRight);
    }

    invaders = invaders.map((alien) => {
      return (alien += direction);
    });
    // setInvaders(invaders);

    if (invaders.indexOf(currentShooterIndex) !== -1) {
      setStatus("Game Over!");
    }

    for (let i = 0; i < invaders.length; i++) {
      if (invaders[i] > squares.length) {
        setStatus("Game Over!");
        clearInterval(invadersId);
      }
    }

    clearInterval(invadersId);
  }
  invadersId = setInterval(() => moveInvaders(invaders), 200);

  // function shoot() {
  //   let laserId;
  //   let currentLaserIndex = currentShooterIndex;
  //   function moveLaser() {}
  // }

  return (
    <div className="container">
      <h1 className="heading">{status}</h1>
      <div className="grid">
        {squares.map((i, index) => {
          return (
            <Squares
              key={i}
              index={index}
              currentShooterIndex={currentShooterIndex}
              setCurrentShooterIndex={setCurrentShooterIndex}
              invaders={invaders}
              moveInvaders={moveInvaders}
              width={width}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
