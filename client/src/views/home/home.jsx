import { EmptyDiv2, EmptyDiv3 } from "../../reUsableComponents/divs/styledDivs";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllRecipes, switchPage } from "../../redux/actions";
import Cards from "../../components/cards/cards";
import FilterMenu from "../../components/filterMenu/filterMenu";

import { PageButtons } from "../../reUsableComponents/buttons/styledButtons";

let pages = {
  start: 0,
  end: 9,
  filtered: false,
};

const Home = () => {
  const dispatch = useDispatch();
  const recipes = useSelector((state) => state.recipes);
  const recipesViews = useSelector((state) => state.recipesViews);
  const recipesFiltered = useSelector((state) => state.recipesFiltered);
  console.log("recipes", recipes);
  console.log("recipesFiltered", recipesFiltered);
  console.log("recipesViews", recipesViews);

  console.log(pages);

  const nextPage = (event) => {
    event.preventDefault();

    if (recipesFiltered.length === 0) {
      if (pages.end > recipes.length) {
        alert("Last Page");
        return;
      }

      if (recipes.length > 9) {
        dispatch(
          switchPage({
            start: pages.start + 9,
            end: pages.end + 9,
            filtered: false,
          })
        );
        pages.start = pages.start + 9;
        pages.end = pages.end + 9;
      }
    } else {
      if (pages.end > recipesFiltered.length) {
        alert("Last Page");
        return;
      }

      if (recipesFiltered.length > 9) {
        dispatch(
          switchPage({
            start: pages.start + 9,
            end: pages.end + 9,
            filtered: true,
          })
        );
        pages.start = pages.start + 9;
        pages.end = pages.end + 9;
      }
    }
  };

  const previousPage = (event) => {
    event.preventDefault();

    if (recipesFiltered.length === 0) {
      if (pages.start === 0) {
        alert("First Page");
        return;
      }

      dispatch(
        switchPage({
          start: pages.start - 9,
          end: pages.end - 9,
          filtered: false,
        })
      );
      pages.start = pages.start - 9;
      pages.end = pages.end - 9;
    } else {
      if (pages.start === 0) {
        alert("First Page");
        return;
      }

      dispatch(
        switchPage({
          start: pages.start - 9,
          end: pages.end - 9,
          filtered: true,
        })
      );
      pages.start = pages.start - 9;
      pages.end = pages.end - 9;
    }
  };

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(getAllRecipes());
    }
  }, []);

  return (
    <EmptyDiv2>
      <FilterMenu />
      <EmptyDiv3>
        <PageButtons onClick={previousPage} name="previous" value="previous">
          Previous
        </PageButtons>

        <PageButtons onClick={nextPage} name="next" value="next">
          Next
        </PageButtons>
      </EmptyDiv3>
      <Cards recipes={recipesViews}></Cards>
    </EmptyDiv2>
  );
};

export default Home;
