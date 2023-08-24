import axios from "axios";

export const GET_ALL_RECIPES = "GET_ALL_RECIPES";
export const GET_RECIPE_BY_ID = "GET_RECIPE_BY_ID";
export const CLEAR_RECIPE_DETAIL = "CLEAR_RECIPE_DETAIL";
export const GET_RECIPE = "GET_RECIPE";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const SWITCH_PAGE = "SWITCH_PAGE";
export const DELETE_RECIPE = "DELETE_RECIPE";
export const EDIT_RECIPE = "EDIT_RECIPE";

export const getAllRecipes = () => {
  const endpoint = "http://localhost:3001/recipes";
  return async (dispatch) => {
    const response = await axios(endpoint);
    return dispatch({
      type: GET_ALL_RECIPES,
      payload: response.data,
    });
  };
};

export const getRecipeById = (id) => {
  const endpoint = `http://localhost:3001/recipes/${id}`;
  return async (dispatch) => {
    try {
      const response = await axios(endpoint);
      return dispatch({
        type: GET_RECIPE_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const getRecipe = (key, value, recipes) => {
  const params = { [key]: value };
  const endpoint = "http://localhost:3001/recipes/filter";
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, recipes, {
        params,
      });
      return dispatch({
        type: GET_RECIPE,
        payload: response.data,
      });
    } catch (error) {
      alert(error.response.data);
    }
  };
};

export const clearRecipeDetail = () => {
  return {
    type: CLEAR_RECIPE_DETAIL,
  };
};

export const createRecipe = (recipe) => {
  const endpoint = "http://localhost:3001/recipes";
  return async (dispatch) => {
    try {
      const response = await axios.post(endpoint, recipe);
      alert(response.data);
      return dispatch({
        type: CREATE_RECIPE,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const switchPage = (pages) => {
  console.log(pages);
  return (dispatch) => {
    dispatch({
      type: SWITCH_PAGE,
      payload: pages,
    });
  };
};

export const deleteRecipe = (id) => {
  const endpoint = `http://localhost:3001/recipes/${id}`;
  return async (dispatch) => {
    try {
      const response = await axios.delete(endpoint);
      alert(response.data);
      return dispatch({
        type: DELETE_RECIPE,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};

export const editRecipe = (id, recipe) => {
  const endpoint = `http://localhost:3001/recipes/${id}`;
  return async (dispatch) => {
    try {
      const response = await axios.put(endpoint, recipe);
      alert(response.data);
      return dispatch({
        type: EDIT_RECIPE,
      });
    } catch (error) {
      alert(error.response.data.error);
    }
  };
};
