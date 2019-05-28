import React, { Component } from "react";

class HeroTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: ""
    };
  }
  componentDidMount() {
    const bgContainer = document.getElementsByClassName("bg-container")[0];
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
      force = 1 / 35;

    var parallaxBG = () => {
      positionX += (followX - positionX) * force;
      positionY += (followY - positionY) * force;
      var translate =
        "translate3d(" + positionX + "px, " + positionY + "px, 1px) scale(1.1)";
      this.setState({
        coordinates: translate
      });

      //Using requestAnimationFrame for performance reasons, vendor-prefixed.
      var requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      requestAnimationFrame(parallaxBG);
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
  }
  render() {
    const { coordinates } = this.state;
    return (
      <>
        <div className="hero">
          <div
            className="bg-container"
            style={{ transform: `${coordinates}` }}
          />
          <div className="overlay" />
          <div className="container">
            <div className="vertically_align">
              <h1>{this.props.title}</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeroTemplate;
