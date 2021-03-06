import { recipes } from "../Components/Recipes/recipes.js";

export default function parseRecipes(typeRecipe) {
  const recipeText = recipes();
  let parsedRecipes = processWhiteSpace(recipeText),
    proccessedRecipes = [];
  parsedRecipes = processDays(parsedRecipes);
  proccessedRecipes = processEachRecipe(parsedRecipes);
  proccessedRecipes = randomizeRecipes(typeRecipe, proccessedRecipes);
  return proccessedRecipes;
}

const randomizeRecipes = (typeRecipe, recipeText) => {
  let number = 0;
  let finalMenu = [];
  let allRecipes = false;
  let result = null;
  if (typeRecipe === "popularRecipe") {
    number = 3;
  } else if (typeRecipe === "weeklyRecipes") {
    number = 7;
  } else {
    allRecipes = true;
  }
  const randomRecipes = recipeText
    .map(recipe => [Math.random(), recipe])
    .sort((recipe, compare) => recipe[0] - compare[0])
    .map(recipe => recipe[1]);
  for (let i = 0; i < randomRecipes.length - 1; i++) {
    if (
      randomRecipes[i].category.toString() !==
        randomRecipes[i + 1].category.toString() &&
      randomRecipes[i].mainIngredient !== randomRecipes[i + 1].mainIngredient
    ) {
      finalMenu.push(randomRecipes[i]);
    }
  }
  if (typeRecipe === "random") {
    result = randomRecipes;
  } else {
    if (!allRecipes) {
      result = finalMenu.slice(0, number);
    } else {
      result = recipeText;
    }
  }
  return result;
};

const processIngredients = recipeText => {
  // Looking for ingredients between slashes "/" and the last ingredient doesnt have a ending slash, which in this case has to look for new line "\n".
  let recipeString = recipeText;
  // eslint-disable-next-line
  recipeString = recipeString.split(/[()]|[\/]+/);
  recipeString.shift();
  let finalIngredients = recipeString.filter(item => {
    return item.trim();
  });
  return finalIngredients;
};

const processDays = recipeText => {
  const days = [
    "Mån",
    "Månd",
    "Tis",
    "Tisd",
    "Ons",
    "Onsd",
    "Tor",
    "Tors",
    "Fre",
    "Fred",
    "Lör",
    "Lörd",
    "Sön",
    "Sönd"
  ];

  days.forEach(function(day) {
    // Looking for the days specified in the days array. Then removes them in the text.
    const removeDays = new RegExp("\\b" + day + "\\b", "gi");
    recipeText = recipeText.replace(removeDays, "");
  });

  return recipeText;
};

const processWhiteSpace = recipeText => {
  // Removes empty lines
  const regexPattern = /^\s*\n/gm;
  const removeWhiteSpace = recipeText.replace(regexPattern, ``);
  return removeWhiteSpace;
};

const processEachRecipe = recipeText => {
  // Looking for ingredients between slashes "/" and the last ingredient doesnt have a ending slash, which in this case has to look for new line "\n".
  // eslint-disable-next-line
  const regexTitlePattern = /^((.+?)[\/|\(])/m;
  let recipeString = recipeText;
  recipeString = recipeString.split("\n");
  const eachRecipes = recipeString.map(text => {
    let myTitles;
    myTitles = regexTitlePattern.exec(text);
    text
      .replace("(", "/")
      .replace(")", "/")
      .replace("//", "/");
    const finalTitle = myTitles[2].trim();
    let myObject = {};
    const parsedIngredients = processIngredients(text);
    const [category, mainIngredient, ...ingredients] = parsedIngredients;
    myObject.title = finalTitle;
    myObject.ingredients = ingredients;
    myObject.category = category.split(",");
    myObject.mainIngredient = mainIngredient;
    return myObject;
  });
  return eachRecipes;
};
