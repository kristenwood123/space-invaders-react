import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { numbers } from "./data";

function App() {
  const [squares, setSquares] = useState(numbers);
  let [currentShooterIndex, setCurrentShooterIndex] = useState(177);

  const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42,
  ];

  useEffect(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowLeft") {
        setCurrentShooterIndex((currentShooterIndex -= 1));
        console.log(currentShooterIndex);
      }
      if (e.key === "ArrowRight") {
        setCurrentShooterIndex((currentShooterIndex += 1));
        console.log(currentShooterIndex);
      }
    });
  }, []);

  return (
    <div className="container">
      <div className="grid">
        <div className="invader-container">
          {alienInvaders.map((i, index) => {
            return <div key={index} className="invaders"></div>;
          })}
        </div>
        {squares.map((i, index) => {
          return (
            <div
              key={i}
              className={index === currentShooterIndex ? "shooter" : "square"}
            ></div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
