import { CardsDiv } from "../../reUsableComponents/divs/styledDivs";
import Card from "../card/card";

const Cards = (props) => {
  return (
    <CardsDiv>
      {props.recipes.map((recipe) => {
        return (
          <Card
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            image={recipe.image}
            diets={recipe.diets}
            health_score={recipe.health_score}
          />
        );
      })}
    </CardsDiv>
  );
};

export default Cards;
