require("dotenv").config();
const axios = require("axios");
const { API_URL, API_KEY, API_MORE, API_CONECTOR } = process.env;
const { Recipe, Diet } = require("../../db");
const { Op } = require("sequelize");
const { apiFormatter } = require("../../validations/apiFormatter/apiFormatter");

const getRecipesBy = async (key, value, recipes) => {
  if (key === "name") {
    const dbResults = await Recipe.findAll({
      where: { name: { [Op.iLike]: `%${value}%` } },
      include: {
        model: Diet,
        attributes: ["name"],
        through: { attributes: [] },
      },
    });

    const response = await axios(
      `${API_URL}${API_CONECTOR}${API_KEY}&number=100${API_MORE}`
    );

    let recipesFiltered = apiFormatter(response.data.results);
    console.log(recipesFiltered);

    recipesFiltered = recipesFiltered.filter((recipe) =>
      recipe.name.toLowerCase().includes(value.toLowerCase())
    );

    const finalResult = [...dbResults, ...recipesFiltered];

    if (finalResult.length) return finalResult;

    throw Error("Recipe doesn't exist!");
  }

  if (key === "diets") {
    let allRecipes = recipes;

    allRecipes = allRecipes.filter((recipe) => {
      if (recipe.diets.length) {
        for (let i = 0; i < recipe.diets.length; i++) {
          if (recipe.diets[i].name === value) {
            return recipe;
          }
        }
      }
    });

    if (allRecipes.length) {
      return allRecipes;
    }

    throw Error("No recipes with this diet");
  }

  if (key === "healthscore") {
    let allRecipes = recipes;

    if (value === "ascendent") {
      allRecipes.sort((a, b) => b.health_score - a.health_score);
    }
    if (value === "descendent") {
      allRecipes.sort((a, b) => a.health_score - b.health_score);
    }

    return allRecipes;
  }

  if (key === "alphabetic") {
    let allRecipes = recipes;

    if (value === "az") {
      allRecipes.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        return 0;
      });
    } else if (value === "za") {
      allRecipes.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    }
    return allRecipes;
  }

  if (key === "createdIn") {
    let allRecipes = recipes;
    if (value === "db") {
      allRecipes = allRecipes.filter((recipe) => {
        return recipe.createdInDb === true;
      });
      return allRecipes;
    }
    if (value === "api") {
      allRecipes = allRecipes.filter((recipe) => {
        return recipe.createdInDb === false;
      });
      return allRecipes;
    }
  }
};

module.exports = { getRecipesBy };
