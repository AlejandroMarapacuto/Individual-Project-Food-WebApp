const { Recipe, Diet } = require("../../db");

const editRecipe = async (id, recipe) => {
  const recipeToEdit = await Recipe.findByPk(id);
  recipeToEdit.setDiets([]);

  await Recipe.update(recipe, { where: { id: id } });
  const diets = await Diet.findAll({ where: { name: recipe.diets } });

  recipeToEdit.addDiets(diets);
};

module.exports = { editRecipe };
