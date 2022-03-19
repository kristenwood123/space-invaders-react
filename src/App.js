import React, { useState, useEffect, useLayoutEffect } from "react";
import "./styles.css";
import { numbers } from "./data";

function App() {
  const [squares, setSquares] = useState(numbers);
  let [currentShooterIndex, setCurrentShooterIndex] = useState(217);
  let [invaders, setInvaders] = useState([
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39,
  ]);

  let width = 15;
  let direction = 1;
  let invadersId;
  let goingRight = true;

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft" && currentShooterIndex % width !== 0) {
        setCurrentShooterIndex((currentShooterIndex -= 1));
      }
      if (e.key === "ArrowRight" && currentShooterIndex % width < width - 1) {
        setCurrentShooterIndex((currentShooterIndex += 1));
      }
      return () => {
        window.removeEventListener("keydown");
      };
    });
  }, [currentShooterIndex]);

  function isInvader(array, index) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === index) {
        return true;
      }
    }
  }

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
    const rightEdge = invaders[invaders.length - 1] % width === width - 1;

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
    clearInterval(handleAlienMove);
  }
  const handleAlienMove = setInterval(() => moveInvaders(invaders), 1000);

  return (
    <div className="container">
      <div className="grid">
        {squares.map((i, index) => {
          return (
            <div
              key={index}
              className={
                isInvader(invaders, index)
                  ? "invaders"
                  : isShooter(squares, index)
                  ? "shooter"
                  : "square"
              }
              style={{ color: "white", fontSize: "12px" }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

// const alienInvaders = [
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30,
//   31, 32, 33, 34, 35, 36, 37, 38, 39,
// ];
