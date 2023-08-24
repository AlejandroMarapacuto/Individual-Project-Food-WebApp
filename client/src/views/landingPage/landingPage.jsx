import { GetStartedButton1 } from "../../reUsableComponents/buttons/styledButtons";
import {
  MainDiv1,
  EmptyDiv1,
  LogosDiv,
} from "../../reUsableComponents/divs/styledDivs";
import { H11, H12 } from "../../reUsableComponents/h1s/styledH1s";
import { H21 } from "../../reUsableComponents/h2s/styledH2s";
import { IconsImg } from "../../reUsableComponents/imgs/styledImgs";
import { Parraph1 } from "../../reUsableComponents/parraphs/styledParraphs";
import { useNavigate } from "react-router-dom";
import nodeicon from "../../assets/imgs/nodejs.jpg";
import reacticon from "../../assets/imgs/react.jpg";
import reduxicon from "../../assets/imgs/redux.jpg";
import postgresicon from "../../assets/imgs/postgresql.jpg";
import sequelizeicon from "../../assets/imgs/sequelize.jpg";

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <MainDiv1>
      <EmptyDiv1>
        <H21>WELCOME TO </H21>
        <H11>THE BEST</H11>
        <H12>FOOD APP</H12>
      </EmptyDiv1>
      <Parraph1>
        Welcome to my Food Web Application! Inside you'll find a lot of variety
        of food where you can see the recipe, the name, how you can create your
        own and more!!. We hope you enjoy this journey! Click on the GET STARTED
        button to enter.
      </Parraph1>
      <GetStartedButton1
        onClick={() => {
          navigate("/home");
        }}
      >
        GET STARTED NOW
      </GetStartedButton1>
      <LogosDiv>
        <IconsImg src={reacticon}></IconsImg>
        <IconsImg src={reduxicon}></IconsImg>
        <IconsImg src={nodeicon}></IconsImg>
        <IconsImg src={postgresicon}></IconsImg>
        <IconsImg src={sequelizeicon}></IconsImg>
      </LogosDiv>
    </MainDiv1>
  );
};

export default LandingPage;
