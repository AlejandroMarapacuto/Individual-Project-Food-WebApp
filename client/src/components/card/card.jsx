import { Link } from "react-router-dom";
import {
  CardDiv,
  DietsDiv,
  HealthscoreDiv,
  NamesDiv,
} from "../../reUsableComponents/divs/styledDivs";
import {
  CardImg,
  HeartIconImg,
} from "../../reUsableComponents/imgs/styledImgs";

import { DietsUl } from "../../reUsableComponents/uls/styledUls";
import { DietLi } from "../../reUsableComponents/lis/styledLis";
import {
  Name1Span,
  Name2Span,
} from "../../reUsableComponents/span/styledSpans";
import hearticon from "../../assets/imgs/heart.png";
import { useEffect } from "react";

const Card = (props) => {
  const name = props.name;
  const nameLength = name.length;
  const halfNameLength = Math.ceil(nameLength / 2);
  const firstHalf = name.slice(0, halfNameLength);
  const secondHalf = name.slice(halfNameLength);

  return (
    <CardDiv>
      <HealthscoreDiv>
        <HeartIconImg src={hearticon} alt=""></HeartIconImg>
        {props.health_score}
      </HealthscoreDiv>
      <Link to={`/detail/${props.id}`}>
        <CardImg src={props.image} alt=""></CardImg>
      </Link>
      <DietsDiv>
        <DietsUl>
          {props.diets.map((diet) => {
            return (
              <DietLi>
                {diet.name[0].toUpperCase()}
                {diet.name.slice(1)}
              </DietLi>
            );
          })}
        </DietsUl>
      </DietsDiv>
      <NamesDiv>
        <Name1Span>{firstHalf}</Name1Span>
        <Name2Span>{secondHalf}</Name2Span>
      </NamesDiv>

      {/* <h1>{props.health_score}</h1>
      {props.diets.map((diet) => {
        return <h1>{diet.name}</h1>;
      })} */}
    </CardDiv>
  );
};

export default Card;
