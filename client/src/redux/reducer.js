import {
  CLEAR_RECIPE_DETAIL,
  CREATE_RECIPE,
  GET_ALL_RECIPES,
  GET_RECIPE_BY_ID,
  GET_RECIPE,
  SWITCH_PAGE,
  DELETE_RECIPE,
} from "./actions";

const initialState = {
  recipes: [],
  diets: [],
  recipeDetail: [],
  recipesViews: [],
  recipesFiltered: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_RECIPES:
      return {
        ...state,
        recipes: action.payload,
        recipesViews: action.payload.slice(0, 9),
      };

    case GET_RECIPE_BY_ID:
      return {
        ...state,
        recipeDetail: action.payload,
      };

    case GET_RECIPE:
      return {
        ...state,
        recipesViews: action.payload.slice(0, 9),
        recipesFiltered: action.payload,
      };

    case CLEAR_RECIPE_DETAIL:
      return { ...state, recipeDetail: [] };

    case CREATE_RECIPE:
      return { ...state };

    case SWITCH_PAGE:
      if (action.payload.filtered === true) {
        return {
          ...state,
          recipesViews: state.recipesFiltered.slice(
            action.payload.start,
            action.payload.end
          ),
        };
      } else {
        return {
          ...state,
          recipesViews: state.recipes.slice(
            action.payload.start,
            action.payload.end
          ),
        };
      }

    case DELETE_RECIPE:
      return { ...state };

    default:
      return { ...state };
  }
};

export default reducer;
