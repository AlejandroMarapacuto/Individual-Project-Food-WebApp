import styled from "styled-components";

export const Input1 = styled.input`
  display: inline-block;
  /* width: 100px;
  flex: 1;
  display: flex;
  align-items: center; */
`;

export const SearchBarInput = styled.input`
  flex-grow: 1;
  border: none;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 16px;
  outline: none;
  border: solid orange 2px;
  background-color: transparent;
  color: white;
  height: 25px;
  margin-top: -20px;
  width: 300px;

  &::placeholder {
    color: white;
    opacity: 50%;
    font-size: 15px;
  }
`;

export const StyledInput = styled.input`
  margin-top: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  text-align: justify;
  width: 400px;
`;

export const StyledCheckboxInput = styled.input`
  margin-top: 5px;
  margin-right: 5px;
`;
