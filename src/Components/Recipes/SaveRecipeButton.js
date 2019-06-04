import React, { Component } from "react";
import ScreenLoader from "../Common/Templates/Loader";

class SaveRecipeButton extends Component {
  constructor(props) {
    super(props);
    this.state = { saved: false };
  }

  buttonHandler = e => {
    const { saved } = this.state;
    const { recipe, week } = this.props;
    let weeksArray = [week];
    let weekCheck = true;
    if (!saved) {
      this.setState({
        saved: true
      });
      localStorage.setItem(`weekly-menu-${week}`, JSON.stringify(recipe));
      let weeks = JSON.parse(localStorage.getItem("weeks"));
      localStorage.setItem("weeks", JSON.stringify(weeksArray));
      if (weeks === null) {
        localStorage.setItem("weeks", JSON.stringify(weeksArray));
      } else if (Array.isArray(weeks)) {
        weeks.map(item => {
          if (item === week) {
            weekCheck = false;
            return false;
          }
          return false;
        });
        if (weekCheck) {
          weeksArray.push(weeks);
          localStorage.setItem("weeks", JSON.stringify(weeksArray));
        }
      }
    }
  };

  render() {
    const { saved } = this.state;
    return (
      <>
        <button
          className="button save-recipe-button"
          onClick={this.buttonHandler}
        >
          Spara meny
          <i className="fas fa-angle-right" />
        </button>
        <ScreenLoader type="Add" active={saved} />
      </>
    );
  }
}

export default SaveRecipeButton;
