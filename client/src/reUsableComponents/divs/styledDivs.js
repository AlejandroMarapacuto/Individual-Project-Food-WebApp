import styled from "styled-components";
import landingPageImage from "../../assets/imgs/landingPageFoods.jpg";
import cardbkgnd from "../../assets/imgs/cardbkg.jpg";
import detailbkgnd from "../../assets/imgs/detailbkgnd.jpg";

export const EmptyDiv1 = styled.div`
  margin-top: 200px;
`;

export const MainDiv1 = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  background-size: cover;
  background-color: transparent;
  background-image: url(${landingPageImage});
`;
export const MainDiv2 = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;
  margin-top: 73px;
  background-size: 1950px 950px;
  background-repeat: no-repeat;
  background-color: transparent;
  background-image: url(${landingPageImage});
`;

export const EmptyDiv2 = styled.div`
  background-color: transparent;
`;

export const EmptyDiv3 = styled.div`
  margin-top: 60px;
  position: absolute;
  background-color: black;
  margin-left: 750px;
  justify-content: space-between;
  width: 300px;
  display: flex;
  border-radius: 10px;
`;

export const NamesDiv = styled.div`
  /* background-color: yellow; */
  width: 200px;
  height: 200px;
  font-size: small;
  margin-top: 400px;
  margin-left: -15px;
  position: absolute;
`;

export const DietsDiv = styled.div`
  position: absolute;
  font-size: 12px;
  /* background-color: blue; */
  width: 275px;
  margin-left: 187px;
  margin-top: 400px;
  color: white;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  height: 180px;
`;

export const NavBarDiv = styled.div`
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
`;

export const FormDiv = styled.div`
  display: flex;
  align-items: center;
  text-align: justify;
  justify-content: center;
  background-color: transparent;
  color: orange;
  height: 600px;
  width: 600px;
  /* border: solid orange 2px; */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  margin-left: 650px;
  margin-top: 100px;
`;

export const CardsDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 7em;
`;

export const CardDiv = styled.div`
  height: 550px;
  width: 450px;
  background-image: url(${cardbkgnd});
  background-size: cover;
  display: flex;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  border: solid;
  border-color: orange;
  padding: 1em;
  border-radius: 10px;
  margin-bottom: 20px;
  overflow: hidden;
  position: relative;

  &:hover {
    scale: 1.1;
  }
`;

export const ImageDiv = styled.div`
  background-color: yellow;
  border-radius: 200px;
  height: 500px;
  margin-left: 40px;
  margin-right: -40px;
  margin-top: -15px;
`;

export const SearchBarDiv = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 8px 16px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-color: orange;
  background-color: transparent;
  margin-left: 700px;
`;

export const FilterMenuDiv = styled.div`
  display: flex;
  color: white;
  align-items: center;
  background-color: black;
  justify-content: center;
  gap: 30px;
  font-size: 20px;
  margin-top: 20px;
  /* border: solid orange 2px; */
  position: absolute;
  margin-left: 500px;
  border-radius: 10px;
`;

export const HealthscoreDiv = styled.div`
  background-color: tra;
  border-radius: 100px;
  position: absolute;
  height: 30px;
  width: 90px;
  margin-top: -520px;
  font-size: 25px;
  color: orange;
  /* border: solid 1px orange; */
`;

export const DetailDiv = styled.div`
  display: flex;
  /* background-color: orange; */
  background-image: url(${detailbkgnd});
  background-size: 1600px 900px;
  background-position: center;
  background-repeat: no-repeat;
  height: 850px;
  position: relative;
`;

export const DetailDivLeft = styled.div`
  width: 900px;
  height: 850px;
  /* background-color: yellow; */
  position: absolute;
  align-items: center;
  justify-content: center;
  display: flex;
`;

export const DetailDivRight = styled.div`
  width: 1050px;
  /* background-color: blue; */
  position: absolute;
  margin-left: 870px;
  height: 850px;
  position: relative;
`;

export const DetailNameDiv = styled.div`
  margin-top: 150px;
`;

export const DetailIdDiv = styled.div`
  /* background-color: yellow; */
  position: absolute;
  display: flex;
  margin-left: 140px;
  flex-direction: column;
  height: 160px;
  width: 800px;
`;

export const DetailHsDiv = styled.div`
  position: absolute;
  display: flex;
  margin-top: 50px;
  margin-left: 10px;
`;

export const DetailCrudDiv = styled.div`
  position: absolute;
  background-color: yellow;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  margin-top: -100px;
`;

export const LogosDiv = styled.div`
  position: absolute;
  margin-left: 670px;
  margin-top: 150px;
  padding: 5px;
  border-radius: 10px;
  background-color: transparent;
  justify-content: space-between;
  display: flex;
  width: 550px;
`;
