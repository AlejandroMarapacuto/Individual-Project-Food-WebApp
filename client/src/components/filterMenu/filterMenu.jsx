import { useDispatch } from "react-redux";
import { getRecipe } from "../../redux/actions";
import { useSelector } from "react-redux";
import { FilterMenuDiv } from "../../reUsableComponents/divs/styledDivs";
import { DietSelect } from "../../reUsableComponents/selects/styledSelects";
import {
  PageButtons,
  ShowAllButtons,
} from "../../reUsableComponents/buttons/styledButtons";

const FilterMenu = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const recipesFiltered = useSelector((state) => state.recipesFiltered);

  const handleChange = (event) => {
    if (recipesFiltered.length > 0) {
      dispatch(
        getRecipe(event.target.name, event.target.value, recipesFiltered)
      );
    } else {
      dispatch(getRecipe(event.target.name, event.target.value, recipes));
    }
  };

  return (
    <FilterMenuDiv>
      Sort by
      <div>
        location
        <DietSelect onChange={handleChange} name="createdIn">
          <option value="allRecipes">all</option>
          <option value="db">DATABASE</option>
          <option value="api">API</option>
        </DietSelect>
      </div>
      <div>
        order
        <DietSelect onChange={handleChange} name="alphabetic">
          <option></option>
          <option value="az">AZ</option>
          <option value="za">ZA</option>
        </DietSelect>
      </div>
      <div>
        healthscore
        <DietSelect onChange={handleChange} name="healthscore">
          <option></option>
          <option value="ascendent">↥</option>
          <option value="descendent">↧</option>
        </DietSelect>
      </div>
      <div>
        diet
        <DietSelect onChange={handleChange} name="diets">
          <option></option>
          <option value="gluten free">Gluten Free</option>
          <option value="dairy free">Dairy Free</option>
          <option value="lacto ovo vegetarian">Lacto Ovo Vegetarian</option>
          <option value="vegan">Vegan</option>
          <option value="paleolithic">Paleolithic</option>
          <option value="primal">Primal</option>
          <option value="whole 30">Whole 30</option>
          <option value="pescatarian">Pescatarian</option>
          <option value="ketogenic">Ketogenic</option>
          <option value="fodmap friendly">Fodmap Friendly</option>
        </DietSelect>
      </div>
      <ShowAllButtons value="allRecipes" onClick={handleChange}>
        Show all
      </ShowAllButtons>
    </FilterMenuDiv>
  );
};

export default FilterMenu;
