const { Diet } = require("../../db");

const postValidations = async (req, res, next) => {
  const { name, image, plate_summary, health_score, step_by_step, diets } =
    req.body;

  const urlRegex =
    /^(https?:\/\/)?(www\.)?([a-z0-9.-]+)\.([a-z]{2,})(\/[^\s]*)?$/i;

  if (!name) return res.status(400).json({ error: "Name empty" });
  if (!image) return res.status(400).json({ error: "Image empty" });
  if (!plate_summary) return res.status(400).json({ error: "Summary empty" });
  if (!health_score)
    return res.status(400).json({ error: "Healthscore empty" });
  if (!step_by_step)
    return res.status(400).json({ error: "Instructions empty" });
  if (!diets.length)
    return res.status(400).json({ error: "Must have at least 1 diet" });

  if (typeof name !== "string" || Number(name))
    return res.status(400).json({ error: "Name must be characters" });
  if (typeof image !== "string")
    return res.status(400).json({ error: "Image must be characters" });
  if (urlRegex.test(image) === false)
    return res.status(400).json({ error: "Invalid image url" });
  if (typeof plate_summary !== "string" || Number(plate_summary))
    return res.status(400).json({ error: "Summary must be characters" });
  if (typeof health_score !== "number")
    return res.status(400).json({ error: "Healthscore must be a number" });
  if (typeof step_by_step !== "string" || Number(step_by_step))
    return res.status(400).json({ error: "Instructions must be characters" });
  if (!Array.isArray(diets))
    return res.status(400).json({ error: "Diets must be characters" });

  for (let i = 0; i < diets.length; i++) {
    const flag = await Diet.findOne({ where: { name: diets[i] } });
    if (!flag) {
      return res.status(400).json({ error: "Must be among the proper diets" });
    }
  }

  next();
};

module.exports = { postValidations };
