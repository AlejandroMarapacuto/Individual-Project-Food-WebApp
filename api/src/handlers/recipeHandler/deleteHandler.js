const { Recipe } = require("../../db");
const { deleteRecipe } = require("../../controllers/deleteRecipe/deleteRecipe");

const deleteRecipeHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const recipeToDelete = await Recipe.findByPk(id);
    await deleteRecipe(id);

    return res
      .status(200)
      .send(` The ${recipeToDelete.name} recipe was succesfully deleted`);
  } catch (error) {
    return res.status(404).json({ error: "Id not found" });
  }
};

module.exports = { deleteRecipeHandler };
