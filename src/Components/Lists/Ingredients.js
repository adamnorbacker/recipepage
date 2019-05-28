import React, { Component } from "react";

class Ingredients extends Component {
  constructor(props) {
    super(props);
    this.state = { list: "open" };
  }

  toggleClass = () => {
    var randomNumber = Math.floor(Math.random() * 10 + 1);
    const ingredients = ["Milk", "Sugar", "Blueberries", "Butter", "Strawberries", "Salt", "Tomatoes", "Flour", "Oats", "Curry"];
    var randomIngredients = ingredients.sort(function() { return 0.5 - Math.random() });
    console.log(randomIngredients);
    this.setState({
      open: this.state.open === "closed" ? "open" : "closed"
    });
  };

  render() {
    return <></>;
  }
}

export default Ingredients;
