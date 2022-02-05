import styled from "styled-components";

export const Grid = styled.div`
  display: grid;
  gap: ${({ gap }) => gap};
  grid-auto-columns: ${({ autoColumns }) => autoColumns};
  grid-auto-rows: ${({ autoRows }) => autoRows};
  grid-template-columns: ${({ templateColumns }) => templateColumns};
  grid-template-rows: ${({ templateRows }) => templateRows};
`;

export const GridItem = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  ${({ rowSpan, colSpan }) => {
    if (rowSpan && colSpan) {
      return `grid-area: ${rowSpan} / ${colSpan};`;
    } else if (colSpan) {
      return `grid-column: ${colSpan};`;
    } else if (rowSpan) {
      return `grid-row: ${rowSpan};`;
    }
  }};
`;
