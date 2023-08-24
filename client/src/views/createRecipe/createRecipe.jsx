import {
  EmptyDiv2,
  FormDiv,
  MainDiv2,
} from "../../reUsableComponents/divs/styledDivs";
import { Form1 } from "../../reUsableComponents/forms/styledForms";
import {
  StyledInput,
  StyledCheckboxInput,
} from "../../reUsableComponents/inputs/styledInputs";
import {
  StyledLabel,
  StyledCheckboxLabel,
} from "../../reUsableComponents/labels/styledLabels";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createRecipe,
  editRecipe,
  getAllRecipes,
  getRecipeById,
} from "../../redux/actions";
import { StyledSelect } from "../../reUsableComponents/selects/styledSelects";
import { StyledButton } from "../../reUsableComponents/buttons/styledButtons";
import { ErrorParraph } from "../../reUsableComponents/parraphs/styledParraphs";
import { useParams, useNavigate } from "react-router-dom";

const CreateRecipe = () => {
  const recipeDetail = useSelector((state) => state.recipeDetail);

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    image: "",
    plate_summary: "",
    health_score: "",
    step_by_step: "",
    diets: [],
  });

  const [errors, setErrors] = useState({
    name: "",
    image: "",
    plate_summary: "",
    health_score: "",
    step_by_step: "",
    diets: [],
  });

  console.log(form);
  const hs = [
    "",
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26,
    27,
    28,
    29,
    30,
    31,
    32,
    33,
    34,
    35,
    36,
    37,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    46,
    47,
    48,
    49,
    50,
    51,
    52,
    53,
    54,
    55,
    56,
    57,
    58,
    59,
    60,
    61,
    62,
    63,
    64,
    65,
    66,
    67,
    68,
    69,
    70,
    71,
    72,
    73,
    74,
    75,
    76,
    77,
    78,
    79,
    80,
    81,
    82,
    83,
    84,
    85,
    86,
    87,
    88,
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
  ];

  const isButtonDisable =
    form.name === "" ||
    form.image === "" ||
    form.plate_summary === "" ||
    form.health_score === "" ||
    form.step_by_step === "" ||
    form.diets?.length === 0;

  const Validation = (form) => {
    const errors = {
      name: "",
      image: "",
      plate_summary: "",
      health_score: "",
      step_by_step: "",
      diets: "",
    };

    if (!form.name) {
      errors.name = "Name empty";
    }
    if (!form.image) {
      errors.image = "Image empty";
    }
    if (!form.plate_summary) {
      errors.plate_summary = "Plate summary empty";
    }
    if (!form.health_score) {
      errors.health_score = "Healthscore empty";
    }

    if (!form.step_by_step) {
      errors.step_by_step = "Step by step empty";
    }
    if (form.diets?.length === 0) {
      errors.diets = "Select at least 1 diet";
    }

    console.log(errors);
    return errors;
  };

  const handleChange = (event) => {
    if (event.target.name === "diets") {
      if (event.target.checked === true) {
        setForm({
          ...form,
          [event.target.name]: [...form.diets, event.target.value],
        });
        setErrors(
          Validation({
            ...form,
            [event.target.name]: [...form.diets, event.target.value],
          })
        );
      } else if (event.target.checked === false) {
        setForm({
          ...form,
          [event.target.name]: form.diets.filter(
            (diet) => diet !== event.target.value
          ),
        });
        setErrors(
          Validation({
            ...form,
            [event.target.name]: form.diets.filter(
              (diet) => diet !== event.target.value
            ),
          })
        );
      }
    } else if (event.target.name === "health_score") {
      const healthscore = Number(event.target.value);
      setForm({ ...form, [event.target.name]: healthscore });
      setErrors(Validation({ ...form, [event.target.name]: healthscore }));
    } else {
      setForm({ ...form, [event.target.name]: event.target.value });
      setErrors(
        Validation({ ...form, [event.target.name]: event.target.value })
      );
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (id) {
      dispatch(editRecipe(id, form)).then(() => {
        dispatch(getAllRecipes());
      });
    } else {
      dispatch(createRecipe(form)).then(() => {
        dispatch(getAllRecipes());
        setForm({
          name: "",
          image: "",
          plate_summary: "",
          health_score: "",
          step_by_step: "",
          diets: [],
        });
      });
    }
  };

  useEffect(() => {
    if (id) {
      dispatch(getRecipeById(id));
      setForm({
        name: recipeDetail?.name,
        image: recipeDetail?.image,
        plate_summary: recipeDetail?.plate_summary,
        health_score: recipeDetail?.health_score,
        step_by_step: recipeDetail?.step_by_step,
        diets: recipeDetail.diets?.map((diet) => diet.name),
      });
    }
  }, []);

  return (
    <MainDiv2>
      <FormDiv>
        <Form1 onSubmit={onSubmit}>
          <EmptyDiv2>
            <StyledLabel for="name">Name: </StyledLabel>
            <StyledInput
              value={form.name}
              onChange={handleChange}
              type="text"
              id="name"
              name="name"
            ></StyledInput>
            {errors.name && <ErrorParraph>{errors.name}</ErrorParraph>}
          </EmptyDiv2>
          <EmptyDiv2>
            <StyledLabel for="plate_summary">Plate Summary: </StyledLabel>
            <StyledInput
              value={form.plate_summary}
              onChange={handleChange}
              type="text"
              id="plate_summary"
              name="plate_summary"
            ></StyledInput>
            {errors.plate_summary && (
              <ErrorParraph>{errors.plate_summary}</ErrorParraph>
            )}
          </EmptyDiv2>
          <EmptyDiv2>
            <StyledLabel for="health_score">Healthscore: </StyledLabel>
            <StyledSelect
              value={form.health_score}
              type="number"
              onChange={handleChange}
              id="health_score"
              name="health_score"
            >
              {hs.map((n) => {
                return <option value={n}>{n}</option>;
              })}
            </StyledSelect>
            {errors.health_score && (
              <ErrorParraph>{errors.health_score}</ErrorParraph>
            )}
          </EmptyDiv2>
          <EmptyDiv2>
            <StyledLabel for="image">Image (url): </StyledLabel>
            <StyledInput
              value={form.image}
              onChange={handleChange}
              type="text"
              id="image"
              name="image"
            ></StyledInput>
            {errors.image && <ErrorParraph>{errors.image}</ErrorParraph>}
          </EmptyDiv2>
          <EmptyDiv2>
            <StyledLabel for="step_by_step">Step By Step: </StyledLabel>
            <StyledInput
              value={form.step_by_step}
              onChange={handleChange}
              type="text"
              id="step_by_step"
              name="step_by_step"
            ></StyledInput>
            {errors.step_by_step && (
              <ErrorParraph>{errors.step_by_step}</ErrorParraph>
            )}
          </EmptyDiv2>
          <StyledLabel>Diet Types: </StyledLabel>
          {errors.diets && <ErrorParraph>{errors.diets}</ErrorParraph>}
          <EmptyDiv2>
            <StyledCheckboxLabel for="gluten_free">
              Gluten Free
            </StyledCheckboxLabel>
            <StyledCheckboxInput
              checked={form.diets?.includes("gluten free")}
              value="gluten free"
              onChange={handleChange}
              type="checkbox"
              id="gluten_free"
              name="diets"
            ></StyledCheckboxInput>
            <StyledCheckboxLabel for="dairy_free">
              Dairy Free
            </StyledCheckboxLabel>
            <StyledCheckboxInput
              checked={form.diets?.includes("dairy free")}
              value="dairy free"
              onChange={handleChange}
              type="checkbox"
              id="dairy_free"
              name="diets"
            ></StyledCheckboxInput>
            <StyledCheckboxLabel for="lacto_ovo_vegetarian">
              Lacto Ovo Vegetarian
            </StyledCheckboxLabel>
            <StyledCheckboxInput
              checked={form.diets?.includes("lacto ovo vegetarian")}
              value="lacto ovo vegetarian"
              onChange={handleChange}
              type="checkbox"
              id="lacto_ovo_vegetarian"
              name="diets"
            ></StyledCheckboxInput>
            <StyledCheckboxLabel for="vegan">Vegan</StyledCheckboxLabel>
            <StyledCheckboxInput
              checked={form.diets?.includes("vegan")}
              value="vegan"
              onChange={handleChange}
              type="checkbox"
              id="vegan"
              name="diets"
            ></StyledCheckboxInput>
            <StyledCheckboxLabel for="paleolithic">
              Paleolithic
            </StyledCheckboxLabel>
            <StyledCheckboxInput
              checked={form.diets?.includes("paleolithic")}
              value="paleolithic"
              onChange={handleChange}
              type="checkbox"
              id="paleolithic"
              name="diets"
            ></StyledCheckboxInput>
          </EmptyDiv2>
          <EmptyDiv2>
            <StyledCheckboxLabel for="primal">Primal</StyledCheckboxLabel>
            <StyledCheckboxInput
              checked={form.diets?.includes("primal")}
              value="primal"
              onChange={handleChange}
              type="checkbox"
              id="primal"
              name="diets"
            ></StyledCheckboxInput>
            <StyledCheckboxLabel for="whole 30">Whole 30</StyledCheckboxLabel>
            <StyledCheckboxInput
              checked={form.diets?.includes("whole 30")}
              value="whole 30"
              onChange={handleChange}
              type="checkbox"
              id="whole_30"
              name="diets"
            ></StyledCheckboxInput>
            <StyledCheckboxLabel for="pescatarian">
              Pescatarian
            </StyledCheckboxLabel>
            <StyledCheckboxInput
              checked={form.diets?.includes("pescatarian")}
              value="pescatarian"
              onChange={handleChange}
              type="checkbox"
              id="pescatarian"
              name="diets"
            ></StyledCheckboxInput>
            <StyledCheckboxLabel for="ketogenic">Ketogenic</StyledCheckboxLabel>
            <StyledCheckboxInput
              checked={form.diets?.includes("ketogenic")}
              value="ketogenic"
              onChange={handleChange}
              type="checkbox"
              id="ketogenic"
              name="diets"
            ></StyledCheckboxInput>
            <StyledCheckboxLabel for="fodmap_friendly">
              Fodmap Friendly
            </StyledCheckboxLabel>
            <StyledCheckboxInput
              checked={form.diets?.includes("fodmap friendly")}
              value="fodmap friendly"
              onChange={handleChange}
              type="checkbox"
              id="fodmap_friendly"
              name="diets"
            ></StyledCheckboxInput>
          </EmptyDiv2>
          {id ? (
            <StyledButton type="submit" disabled={isButtonDisable}>
              Edit Recipe
            </StyledButton>
          ) : (
            <StyledButton type="submit" disabled={isButtonDisable}>
              Create Recipe
            </StyledButton>
          )}
        </Form1>
      </FormDiv>
    </MainDiv2>
  );
};

export default CreateRecipe;
