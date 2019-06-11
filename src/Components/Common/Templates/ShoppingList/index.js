import React, { Component } from "react";
import "./style.css";

class ShoppingList extends Component {
  state = { activeCSS: "", closed: false };

  componentDidUpdate() {
    const { activeCSS, closed } = this.state;
    const { visible } = this.props;
    if (visible === "active" && activeCSS === "" && closed === false) {
      document.body.style.overflow = "hidden";
      this.setState({
        activeCSS: "active"
      });
    }
  }

  generate = () => {
    const { activeCSS } = this.state;
    if (activeCSS === "active") {
      console.log("generate");
      const { recipes } = this.props;
      let ingredients = [];
      let shoppingList = [];
      recipes.map(item => {
        ingredients.push(item.mainIngredient);
        item.ingredients.map(ingredient => {
          return ingredients.push(ingredient);
        });
        return item;
      });
      const parsedIngredients = this.parseDuplicates(ingredients);
      Object.entries(parsedIngredients).map(([key, value], index) => {
        if (value > 1) {
          return shoppingList.push(`${key} * ${value}`);
        } else {
          return shoppingList.push(key);
        }
      });
      return shoppingList.map((element, index) => {
        return (
          <li key={index}>
            <input type="checkbox" className="checkbox-shoppinglist" />
            <p className="recipe-ingredient">{element}</p>
          </li>
        );
      });
    }
  };

  parseDuplicates = array => {
    const arrayLength = array.length;
    let duplicates = {};
    for (var i = 0; i < arrayLength; i++) {
      var item = array[i];
      duplicates[item] = duplicates[item] >= 1 ? duplicates[item] + 1 : 1;
    }
    return duplicates;
  };

  close = () => {
    this.setState({
      activeCSS: "",
      closed: true
    });
    document.body.style.overflow = "initial";
  };

  render() {
    const { activeCSS } = this.state;
    return (
      <>
        <div className={`modal shopping-list ${activeCSS}`}>
          <div className="container">
            <div className="close" onClick={this.close}>
              <i className="fas fa-times" />
            </div>
            <h2>Inköpslista</h2>
            <ul className="recipe-details">{this.generate()}</ul>
            <div className="button-container">
              {/* <button className="button bgorange">
                Spara inköpslista
                <i className="fas fa-angle-right" />
              </button> */}
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
