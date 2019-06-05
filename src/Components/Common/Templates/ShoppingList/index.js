import React, { Component } from "react";
import "./style.css";

class ShoppingList extends Component {
  state = { activeCSS: "", closed: false };

  componentDidUpdate() {
    const { activeCSS, closed } = this.state;
    const { visible } = this.props;
    if (visible === "active" && activeCSS === "" && closed === false) {
      this.setState({
        activeCSS: "active"
      });
    }
  }

  generate = () => {
    console.log("generate");
  };

  close = () => {
    this.setState({
      activeCSS: "",
      closed: true
    });
  };

  render() {
    const { activeCSS } = this.state;
    return (
      <>
        <div className={`modal shopping-list ${activeCSS}`}>
          <div className="container">
            <h2>Inköpslista</h2>
            <div className="button-container">
              <button className="button bgorange">
                Spara inköpslista
                <i className="fas fa-angle-right" />
              </button>
              <button className="button bgorange" onClick={this.close}>
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

export default ShoppingList;
