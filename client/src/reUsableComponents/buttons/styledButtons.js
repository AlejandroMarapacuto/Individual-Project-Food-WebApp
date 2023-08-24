import styled from "styled-components";
import searchicon from "../../assets/imgs/searchicon2.png";

export const GetStartedButton1 = styled.button`
  height: 50px;
  width: 300px;
  border-radius: 10px;
  background-color: transparent;
  color: orange;
  border-color: orange;
  font-size: 18px;
  font-weight: bold;

  &:hover {
    scale: 1.1;
  }
`;

export const BarButtons = styled.button`
  height: 40px;
  width: 200px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  border-color: orange;
  font-size: 18px;
  /* font-weight: bold; */

  &:hover {
    scale: 1.1;
  }
`;

export const SearchBarButton = styled.button`
  border: none;
  border-radius: 20px;
  padding: 6px 16px;
  margin-left: -5px;
  margin-top: -15px;
  cursor: pointer;
  font-size: 16px;
  background-image: url(${searchicon});
  background-size: 40px;
  background-repeat: no-repeat;
  background-position: center;
  height: 50px;
  width: 50px;
  background-color: transparent;

  &:hover {
    scale: 1.2;
  }
`;

export const StyledButton = styled.button`
  margin-top: 20px;
  background-color: #ff6600;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  width: 200px;

  &:hover {
    background-color: #ff8800;
  }
`;

export const PageButtons = styled.button`
  height: 30px;
  width: 150px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  border-color: orange;
  font-size: 18px;

  &:hover {
    scale: 1.1;
  }
`;

export const CrudButtons = styled.button`
  height: 30px;
  width: 150px;
  border-radius: 10px;
  background-color: black;
  color: white;
  border-color: orange;
  font-size: 18px;
  margin-left: -400px;

  &:hover {
    scale: 1.1;
  }
`;

export const ShowAllButtons = styled.button`
  height: 30px;
  width: 150px;
  border-radius: 10px;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 18px;

  &:hover {
    scale: 1.1;
  }
`;
