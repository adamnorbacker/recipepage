import React, { Component } from "react";
import "./style.css";

class HeroTemplate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      coordinates: ""
    };
  }
  componentDidMount() {
    const bgContainer = document.getElementsByClassName("bg-container")[0];
    const getProperWidth = window
      .getComputedStyle(bgContainer)
      .getPropertyValue("width")
      .slice(0, -2);
    const getProperHeight = window
      .getComputedStyle(bgContainer)
      .getPropertyValue("height")
      .slice(0, -2);
    let followX = 0,
      followY = 0,
      positionX = 0,
      positionY = 0;
    const force = 1 / 35;

    const parallaxBG = () => {
      positionX += (followX - positionX) * force;
      positionY += (followY - positionY) * force;
      const translate =
        "translate3d(" + positionX + "px, " + positionY + "px, 1px) scale(1.1)";
      this.setState({
        coordinates: translate
      });

      //Using requestAnimationFrame for performance reasons, vendor-prefixed.
      const requestAnimationFrame =
        window.requestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.msRequestAnimationFrame;
      requestAnimationFrame(parallaxBG);
    };

    window.addEventListener("mousemove", e => {
      const mousePosX = Math.max(
        -100,
        Math.min(100, getProperWidth / 2 - e.clientX)
      );
      const mousePosY = Math.max(
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
    const { title, subTitle } = this.props;
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
              <h1 class="title">{title}</h1>
              {subTitle !== undefined || subTitle !== null ? (
                <h2 className="subtitle">{subTitle}</h2>
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeroTemplate;
