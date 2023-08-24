import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipe } from "../../redux/actions";
import { SearchBarDiv } from "../../reUsableComponents/divs/styledDivs";
import { SearchBarInput } from "../../reUsableComponents/inputs/styledInputs";
import { SearchBarButton } from "../../reUsableComponents/buttons/styledButtons";

const SearhBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState({ key: "", value: "" });
  const recipes = useSelector((state) => state.recipes);
  const recipesFiltered = useSelector((state) => state.recipesFiltered);

  const handleChange = (event) => {
    event.preventDefault();
    setInput({
      key: event.target.name,
      value: event.target.value,
    });
  };

  const onSearch = (key, value) => {
    if (recipesFiltered > 0) {
      dispatch(getRecipe(key, value, recipesFiltered));
    } else {
      dispatch(getRecipe(key, value));
    }
  };

  return (
    <SearchBarDiv>
      <SearchBarInput
        placeholder="Search recipe..."
        onChange={handleChange}
        value={input.name}
        name="name"
      ></SearchBarInput>
      <SearchBarButton
        onClick={() => {
          onSearch(input.key, input.value);
        }}
      ></SearchBarButton>
    </SearchBarDiv>
  );
};

export default SearhBar;
