const { Router } = require("express");
const {
  getRecipeById,
} = require("../../controllers/getRecipeById/getRecipeById");
const { postRecipe } = require("../../controllers/postRecipe/postRecipe");
const { recipeHandler } = require("../../handlers/recipeHandler/recipeHandler");
const {
  postValidations,
} = require("../../validations/postValidations/postValidations");
const {
  deleteRecipeHandler,
} = require("../../handlers/recipeHandler/deleteHandler");
const {
  editRecipeHandler,
} = require("../../handlers/recipeHandler/editHandler");

const recipesRouter = Router();

recipesRouter.post("/", postValidations, postRecipe);
recipesRouter.post("/filter", recipeHandler);
recipesRouter.get("/", recipeHandler);
recipesRouter.get("/:id", getRecipeById);
recipesRouter.delete("/:id", deleteRecipeHandler);
recipesRouter.put("/:id", editRecipeHandler);
module.exports = recipesRouter;
