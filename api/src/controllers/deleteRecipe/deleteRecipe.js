const { Recipe } = require("../../db");

const deleteRecipe = async (id) => {
  await Recipe.destroy({ where: { id: id } });
};

module.exports = { deleteRecipe };
