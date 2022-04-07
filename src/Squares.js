import React, { useEffect } from "react";
import classNames from "classnames";
import { keyboardImplementationWrapper } from "@testing-library/user-event/dist/keyboard";

const Squares = ({
  currentShooterIndex,
  setCurrentShooterIndex,
  invaders,
  index,
  squares,
  width,
  currentLaserIndex,
  setCurrentLaserIndex,
  isLaserActive,
  setIsLaserActive,
}) => {
  const wrapperClasses = classNames("square", {
    shooter: currentShooterIndex === index,
    invaders: isInvader(invaders, index),
    laser: isLaserActive,
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
        window.addEventListener('keydown')
        
      };
    });
  }, [currentShooterIndex]);

  useEffect(() => {
    // document.addEventListener("keydown", (e) => {
    // if (e.key === "ArrowUp") {
    //   laserId = setInterval(moveLaser(squares, currentLaserIndex), 100);
    // }
    if (currentLaserIndex === 209) return true;

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
  const handleShoot = () => {};
  return (
    <>
      <div
        style={{ color: "white", fontSize: "12px" }}
        className={wrapperClasses}
      ></div>
    </>
  );
};

export default Squares;
