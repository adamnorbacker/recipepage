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
    const weeksArray = [week];
    if (!saved) {
      this.setState({
        saved: true
      });
      localStorage.setItem(`weekly-menu-${week}`, JSON.stringify(recipe));
      const weeks = JSON.parse(localStorage.getItem("weeks"));
      console.log("clicked");
      if (weeks === null) {
        console.log("is null");
        localStorage.setItem("weeks", JSON.stringify(weeksArray));
      } else if (Array.isArray(weeks)) {
        weeks.map(item => {
          console.log(item);
          console.log(week);
          if (item !== week) {
            weeksArray.push(item);
          }
          return item;
        });
        localStorage.setItem("weeks", JSON.stringify(weeksArray));
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
