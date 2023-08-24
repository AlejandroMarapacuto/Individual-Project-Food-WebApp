import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import {
  DetailCrudDiv,
  DetailDiv,
  DetailDivLeft,
  DetailDivRight,
  DetailHsDiv,
  DetailIdDiv,
  DetailNameDiv,
} from "../../reUsableComponents/divs/styledDivs";
import {
  DetailHeartIconImg,
  DetailImg,
} from "../../reUsableComponents/imgs/styledImgs";
import { DietsUl } from "../../reUsableComponents/uls/styledUls";
import { DietLi } from "../../reUsableComponents/lis/styledLis";
import {
  Name3Span,
  Name4Span,
} from "../../reUsableComponents/span/styledSpans";
import {
  SbsText,
  SummaryText,
} from "../../reUsableComponents/texts/styledTexts";
import hearticon from "../../assets/imgs/heart.png";
import {
  HsParraph,
  IdParraph,
} from "../../reUsableComponents/parraphs/styledParraphs";
import { CrudButtons } from "../../reUsableComponents/buttons/styledButtons";
import {
  clearRecipeDetail,
  deleteRecipe,
  getRecipeById,
  getAllRecipes,
} from "../../redux/actions";
const RecipeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState({});
  const recipeDetail = useSelector((state) => state.recipeDetail);

  const name = recipeDetail.name;
  const nameLength = name?.length;
  const halfNameLength = Math.ceil(nameLength / 2);
  const firstHalf = name?.slice(0, halfNameLength);
  const secondHalf = name?.slice(halfNameLength);

  const onDelete = (id) => {
    dispatch(deleteRecipe(id)).then(() => {
      dispatch(getAllRecipes());
      navigate("/home");
    });
  };

  useEffect(() => {
    try {
      dispatch(getRecipeById(id));
    } catch (error) {
      alert("not found");
    }

    return dispatch(clearRecipeDetail());
  }, [id]);

  return (
    <DetailDiv>
      <DetailDivLeft>
        {recipeDetail.createdInDb === true && (
          <DetailCrudDiv>
            <CrudButtons
              onClick={() => {
                navigate(`/editRecipe/${id}`);
              }}
            >
              EDIT
            </CrudButtons>
            <CrudButtons
              onClick={() => {
                onDelete(recipeDetail.id);
              }}
            >
              DELETE
            </CrudButtons>
          </DetailCrudDiv>
        )}
        <DetailImg src={recipeDetail?.image} alt=""></DetailImg>
      </DetailDivLeft>
      <DetailDivRight>
        <DetailIdDiv>
          <IdParraph>ID: {recipeDetail?.id}</IdParraph>
          <DetailHsDiv>
            <DetailHeartIconImg src={hearticon} alt=""></DetailHeartIconImg>
            <HsParraph>{recipeDetail?.health_score}</HsParraph>
          </DetailHsDiv>
        </DetailIdDiv>
        <DetailNameDiv>
          <Name3Span>{firstHalf}</Name3Span>
          <br></br>
          <Name4Span>{secondHalf}</Name4Span>
        </DetailNameDiv>

        <SummaryText>
          {
            new DOMParser().parseFromString(
              recipeDetail?.plate_summary,
              "text/html"
            ).documentElement.textContent
          }
        </SummaryText>
        <IdParraph>Preparation</IdParraph>
        <SbsText>
          {
            new DOMParser().parseFromString(
              recipeDetail?.step_by_step,
              "text/html"
            ).documentElement.textContent
          }
        </SbsText>
        <DietsUl>
          {recipeDetail.diets?.map((diet) => {
            return (
              <DietLi>
                {diet.name[0].toUpperCase()}
                {diet.name.slice(1)}
              </DietLi>
            );
          })}
        </DietsUl>
      </DetailDivRight>
    </DetailDiv>
  );
};

export default RecipeDetail;
