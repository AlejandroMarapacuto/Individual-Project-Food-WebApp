require("dotenv").config();
const axios = require("axios");
const { API_URL, API_KEY, API_MORE, API_BY_ID, API_BY_ID_INFO, API_CONECTOR } =
  process.env;
const { Recipe, Diet } = require("../../db");
const { apiFormatter } = require("../../validations/apiFormatter/apiFormatter");

const getAllRecipes = async () => {
  const dbResults = await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  const response = await axios(
    `${API_URL}${API_CONECTOR}${API_KEY}&number=100${API_MORE}`
  );

  const recipesFiltered = apiFormatter(response.data.results);

  const allRecipes = [...dbResults, ...recipesFiltered];

  // const recipesPags = allRecipes.slice(0, 9);

  return allRecipes;
};

module.exports = { getAllRecipes };
