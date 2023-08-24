import styled from "styled-components";

export const DietSelect = styled.select`
  background-color: orange;
  border-color: orange;
  border-radius: 4px;
  border: solid 1px;

  &:hover {
    scale: 1.1;
  }

  option {
    background-color: #333; /* Color de fondo para las opciones */
    color: orange; /* Color de texto para las opciones */
    padding: 8px; /* Espaciado interno para las opciones */
  }
`;

export const StyledSelect = styled.select`
  margin-top: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
