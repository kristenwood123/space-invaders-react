import React, { useEffect } from "react";
import classNames from "classnames";

const Squares = ({
  currentShooterIndex,
  setCurrentShooterIndex,
  invaders,
  index,
  squares,
  width,
  currentLaserIndex,
  setCurrentLaserIndex,
}) => {
  const wrapperClasses = classNames("square", {
    shooter: currentShooterIndex === index,
    invaders: isInvader(invaders, index),
    laser: isLaser(squares, index),
  });

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

  function isLaser(squares, index) {
    let laserId = (currentShooterIndex -= width);
    if (squares[index] === laserId) {
      return true;
    }
  }
  useEffect(() => {
    console.log(currentLaserIndex);
    if (currentLaserIndex === 209) return true;
    // document.addEventListener("keydown", (e) => {
    // if (e.key === "ArrowUp") {
    //   laserId = setInterval(moveLaser(squares, currentLaserIndex), 100);
    // }
    // return () => {
    //   window.removeEventListener("keydown");
    // };
  });
  // }, []);

  // function moveLaser(array, currentLaserIndex) {

  //   if (array[currentLaserIndex]) return true;
  //   if (array[currentLaserIndex] !== true) {
  //     return false;
  //   }
  // }

  function isInvader(array, index) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === index) {
        return true;
      }
    }
  }

  return (
    <div
      style={{ color: "white", fontSize: "12px" }}
      className={wrapperClasses}
    ></div>
  );
};

export default Squares;
