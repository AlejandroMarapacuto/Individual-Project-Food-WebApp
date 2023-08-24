require("dotenv").config();
const axios = require("axios");
const { API_URL, API_KEY, API_MORE, API_BY_ID, API_BY_ID_INFO, API_CONECTOR } =
  process.env;
const { Recipe } = require("../../db");
const { Diet } = require("../../db");
const { apiFormatter } = require("../../validations/apiFormatter/apiFormatter");

const getRecipeById = async (req, res) => {
  try {
    const id = req.params.id;

    if (id.length > 6) {
      const recipe = await Recipe.findByPk(id, {
        include: {
          model: Diet,
          attributes: ["name"],
          through: { attributes: [] },
        },
      });
      return res.status(200).json(recipe);
    } else {
      const response = await axios(
        `${API_BY_ID}${id}${API_BY_ID_INFO}${API_CONECTOR}${API_KEY}`
      );

      const recipe = {
        id: response.data.id,
        name: response.data.title,
        image: response.data.image,
        plate_summary: response.data.summary,
        health_score: response.data.healthScore,
        step_by_step: response.data.instructions,
        diets: response.data.diets.map((diet) => {
          return { name: diet };
        }),
      };

      return res.status(200).json(recipe);
    }
  } catch (error) {
    return res.status(404).send("algo salio mal");
  }
};

module.exports = {
  getRecipeById,
};
