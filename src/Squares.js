import React, { useEffect } from "react";
import classNames from "classnames";

const Squares = ({
  currentShooterIndex,
  setCurrentShooterIndex,
  invaders,
  index,
  width,
}) => {
  const wrapperClasses = classNames("square", {
    shooter: currentShooterIndex === index,
    invaders: isInvader(invaders, index),
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
    >
      {index}
    </div>
  );
};

export default Squares;
