import React, { Component } from "react";
import "./style.css";

class ScreenLoader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      shown: ""
    };
  }

  componentDidUpdate() {
    const { active } = this.props;
    const { shown, loaded } = this.state;
    if (!loaded & active & (shown !== "active")) {
      this.setState({
        shown: "active",
        loaded: true
      });
    }
  }

  buttonHandler = () => {
    this.setState({
      shown: ""
    });
  };

  render() {
    const { shown } = this.state;
    const { type } = this.props;
    let header;
    if (type === "Remove") {
      header = "Meny borttagen";
    } else if (type === "Add") {
      header = "Meny sparad";
    }
    return (
      <>
        <div className={`modal ${shown}`}>
          <div className="container">
            <div className="content">
              <h2>{header}</h2>
              <button className="button" onClick={this.buttonHandler}>
                Stäng
                <i className="fas fa-angle-right" />
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ScreenLoader;
