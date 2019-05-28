import React, { useState } from "react";

function Coordinates() {
  const bgContainer = document.getElementsByClassName("bg-container")[0],
  [count, setCount] = useState(0);
  var getProperWidth = window
      .getComputedStyle(bgContainer)
      .getPropertyValue("width")
      .slice(0, -2),
    getProperHeight = window
      .getComputedStyle(bgContainer)
      .getPropertyValue("height")
      .slice(0, -2),
    followX = 0,
    followY = 0,
    positionX = 0,
    positionY = 0,
    force = 1 / 35,
    translate;

  var parallaxBG = () => {
    positionX += (followX - positionX) * force;
    positionY += (followY - positionY) * force;
    translate =
      "translate3d(" + positionX + "px, " + positionY + "px, 1px) scale(1.1)";

    //Using requestAnimationFrame for performance reasons, vendor-prefixed.
    var requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame;
    requestAnimationFrame(parallaxBG);

    // Returns position every requested animation frame as supposed to.
     console.log(translate);
     setCount(count + 1);
  };

  window.addEventListener("mousemove", e => {
    var mousePosX = Math.max(
      -100,
      Math.min(100, getProperWidth / 2 - e.clientX)
    );
    var mousePosY = Math.max(
      -100,
      Math.min(100, getProperHeight / 2 - e.clientY)
    );
    followX = (20 * mousePosX) / 100;
    followY = (10 * mousePosY) / 100;
  });

  parallaxBG();
  console.log(count);
  return <></>;
}

export default Coordinates;
