import React, { Component } from "react";
import ScreenLoader from "../Common/Templates/Loader";

class SaveRecipeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { saved: false };
  }

  buttonHandler = e => {
    const { saved } = this.state;
    const { recipe } = this.props;
    if (!saved) {
      this.setState({
        saved: true
      });
      localStorage.setItem("WeeklyMenu", recipe[0]);
    }
  };

  render() {
    return (
      <>
        <button
          className="button save-recipe-button"
          onClick={this.buttonHandler}
        >
          Save menu
        </button>
        <ScreenLoader active={this.state.saved} />
      </>
    );
  }
}

export default SaveRecipeButton;
