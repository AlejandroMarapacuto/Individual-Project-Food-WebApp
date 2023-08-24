const { Recipe, Diet } = require("../../db");

const postRecipe = async (req, res) => {
  try {
    const newRecipe = await Recipe.create(req.body);

    let recipeDiets = await Diet.findAll({ where: { name: req.body.diets } });

    newRecipe.addDiet(recipeDiets);

    console.log(newRecipe);
    return res
      .status(200)
      .send(` The ${newRecipe.name} recipe was succesfully created`);
  } catch (error) {
    return res.status(404).json({ error: "Recipe was already created" });
  }
};

module.exports = { postRecipe };
