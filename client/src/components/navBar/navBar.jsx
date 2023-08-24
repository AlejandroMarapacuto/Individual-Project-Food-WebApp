import { BarButtons } from "../../reUsableComponents/buttons/styledButtons";
import { NavBarDiv } from "../../reUsableComponents/divs/styledDivs";
import { Link } from "react-router-dom";
import SearhBar from "../searchbar/searchBar";
import { useLocation } from "react-router-dom";

const NavBar = (props) => {
  const location = useLocation();

  return (
    <NavBarDiv>
      {location.pathname !== "/home" && (
        <Link to="/home">
          <BarButtons>HOME</BarButtons>
        </Link>
      )}
      {location.pathname === "/home" && <SearhBar></SearhBar>}
      <Link to="/createRecipe">
        <BarButtons>CREATE RECIPE</BarButtons>
      </Link>
    </NavBarDiv>
  );
};

export default NavBar;
