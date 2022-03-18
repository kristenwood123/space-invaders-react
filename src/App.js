import React, { useState, useEffect } from "react";
import "./styles.css";
import { numbers } from "./data";

function App() {
  const [squares, setSquares] = useState(numbers);
  let [currentShooterIndex, setCurrentShooterIndex] = useState(217);
  const [invaders, setInvaders] = useState();

  let width = 15;

  const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39,
  ];

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

  // function moveInvaders(alienInvaders) {
  //   const leftEdge = alienInvaders[0] % width === 0;
  //   const rightEdge =
  //     alienInvaders[alienInvaders.length - 1] % width === width - 1;
  //   removeInvader(alienInvaders);

  //   for (let i = 0; i < alienInvaders.length; i++) {
  //     alienInvaders[i] += 1;
  // isInvader(alienInvaders, i);
  //   }
  // }

  return (
    <div className="container">
      <div className="grid">
        {squares.map((i, index) => {
          return (
            <div
              key={index}
              className={
                isInvader(alienInvaders, index)
                  ? "invaders"
                  : isShooter(squares, index)
                  ? "shooter"
                  : "square"
              }
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
