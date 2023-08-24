require("dotenv").config();
const { API_URL, API_KEY, API_MORE, API_BY_ID, API_BY_ID_INFO, API_CONECTOR } =
  process.env;
const axios = require("axios");
const { Diet } = require("../../db");
const { apiFormatter } = require("../../validations/apiFormatter/apiFormatter");

const getDiets = async () => {
  try {
    const response = await axios(
      `${API_URL}${API_CONECTOR}${API_KEY}&number=100${API_MORE}`
    );

    const dietRecipes = response.data.results.map((recipe) => recipe.diets);
    const arrayDiets = [];
    for (let i = 0; i < dietRecipes.length; i++) {
      for (let j = 0; j < dietRecipes[i].length; j++) {
        arrayDiets.push(dietRecipes[i][j]);
      }
    }
    const setDiets = new Set(arrayDiets);
    const diets = Array.from(setDiets);

    console.log("Database Loaded OK");
    console.log(diets);

    for (let i = 0; i < diets.length; i++) {
      await Diet.create({ name: diets[i] });
    }
  } catch (error) {}
};

module.exports = { getDiets };
