const apiFormatter = (recipes) => {
  if (!recipes[0].title) {
    return null;
  } else {
    const recipesAll = recipes.map((recipe) => {
      return {
        id: recipe.id,
        name: recipe.title,
        image: recipe.image,
        plate_summary: recipe.summary,
        health_score: recipe.healthScore,
        createdInDb: false,
        diets: recipe.diets.map((diet) => {
          return { name: diet };
        }),
      };
    });

    return recipesAll;
  }
};

module.exports = { apiFormatter };
