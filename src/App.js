import React, { useState } from "react";

import "./styles.css";
import { numbers } from "./data";
import Squares from "./Squares";

function App() {
  const [squares, setSquares] = useState(numbers);
  let [currentShooterIndex, setCurrentShooterIndex] = useState(217);
  let [invaders, setInvaders] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39,
  ]);

  let direction = 1;
  let invadersId;
  let goingRight = true;
  let width = 15;

  // useRef is shooter

  function removeInvader(array, index) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === index) {
        return true;
      }
    }
  }

  function isShooter(array, index) {
    for (let i = index; i < array.length; i++) {
      if (index === currentShooterIndex) {
        return true;
      }
    }
  }

  function moveInvaders(invaders) {
    const leftEdge = invaders[0] % width === 0;
    let rightEdge = invaders[invaders.length - 1] % width === width - 1;

    if (rightEdge && goingRight) {
      for (let i = 0; i < invaders.length; i++) {
        invaders[i] += width + 1;
        direction = -1;
        goingRight = false;
      }
    }

    if (leftEdge && !goingRight) {
      for (let i = 0; i < invaders.length; i++) {
        invaders[i] += width - 1;
        direction = -1;
        goingRight = true;
      }
    }

    invaders = invaders.map((alien) => {
      return (alien += direction);
    });

    setInvaders(invaders);

    clearInterval(invadersId);
  }
  // invadersId = setInterval(() => moveInvaders(invaders), 500);

  return (
    <div className="container">
      <div className="grid">
        {squares.map((i, index) => {
          return (
            <Squares
              key={index}
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

// if (leftEdge && !goingRight) {
//   for (let i = 0; i < invaders.length; i++) {
//     invaders[i] += width - 1;
//     direction = -1;
//     goingRight = true;
//   }
// }
