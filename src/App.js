import React, { useState } from "react";
import "./styles.css";
import { numbers } from "./data";

function App() {
  const [squares, setSquares] = useState(numbers);
  const [isInvader, setIsInvader] = useState(true);

  const alienInvaders = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 30,
    31, 32, 33, 34, 35, 36, 37, 38, 39,
  ];

  const isFound = (squares) => {
    const result = squares.filter((num) => num === 0);

    if (result.length === 1) return setIsInvader(true);
    return false;
  };
  isFound(squares);

  return (
    <div className="grid">
      {alienInvaders.map((i, index) => {
        return <span key={index} className="invader"></span>;
      })}
      {squares.map((i, index) => {
        return <div key={i} className="sq"></div>;
      })}
    </div>
  );
}

export default App;
