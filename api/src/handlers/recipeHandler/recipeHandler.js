const {
  getAllRecipes,
} = require("../../controllers/getAllRecipes/getAllRecipes");
const { getRecipesBy } = require("../../controllers/getRecipesBy/getRecipesBy");

const recipeHandler = async (req, res) => {
  const key = Object.keys(req.query)[0];
  const value = Object.values(req.query)[0];
  const recipes = req.body;

  if (value === "allRecipes") {
    try {
      const recipe = await getAllRecipes();
      return res.status(200).json(recipe);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }
  if (
    key === "name" ||
    key === "diets" ||
    key === "healthscore" ||
    key === "alphabetic" ||
    key === "createdIn"
  ) {
    try {
      const recipe = await getRecipesBy(key, value, recipes);
      return res.status(200).json(recipe);
    } catch (error) {
      return res.status(400).send(error.message);
    }
  }

  try {
    const recipe = await getAllRecipes();
    res.status(200).json(recipe);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

module.exports = { recipeHandler };
