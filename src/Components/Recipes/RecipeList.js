import React, { Component } from "react";

class RecipeList extends Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     text: null,
  //     ingredients: null,
  //     open: null,
  //     eachRecipes: null,
  //     titles: null
  //   };
  // }

  // printText = () => {
  //   const originalText = recipes(),
  //     processText = this.processText(originalText),
  //     processIngredients = this.processIngredients(originalText);
  //   this.setState({
  //     text: processText,
  //     ingredients: processIngredients
  //   });
  // };

  // saveRecipe = () => {
  //   const { ingredients, eachRecipes, text } = this.state;
  //   // console.log(processEachRecipe);
  //   // localStorage.setItem("Ingredients", ingredients);
  // };

  // componentDidMount() {
  //   parseRecipes();
  // }


  render() {
    // const { text, open } = this.state;
    return (
      <div className="filereader">
        <h1>Hämta recept</h1>
        {/* <button onClick={this.printText}>Hämta recept</button>
        <div dangerouslySetInnerHTML={{ __html: text }} />
        <button className={open} onClick={this.saveRecipe}>
          Spara recept
        </button> */}
      </div>
    );
  }
}

export default RecipeList;
