const { editRecipe } = require("../../controllers/editRecipe/editRecipe");
const { Recipe } = require("../../db");

const editRecipeHandler = async (req, res) => {
  try {
    const recipeToEdit = await Recipe.findByPk(req.params.id);

    await editRecipe(req.params.id, req.body);

    return res
      .status(200)
      .send(` The ${recipeToEdit.name} recipe was succesfully updated`);
  } catch (error) {
    return res.status(404).json({ error: "Id not found" });
  }
};

module.exports = { editRecipeHandler };
