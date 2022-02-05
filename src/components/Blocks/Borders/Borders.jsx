import styled from "styled-components/macro";
import { Grid, GridItem } from "../../Atoms/Grid";

const borderList = [
  "solid",
  "dotted",
  "dashed",
  "double",
  "groove",
  "ridge",
  "inset",
  "outset",
  "dashed solid",
];

const Borders = ({ borderStyles }) => {
  const { color, borderWidth, borderRadius } = borderStyles;

  return (
    <Grid
      templateColumns="repeat(auto-fill,minmax(200px,1fr))"
      templateRows="repeat(3,minmax(200px,1fr))"
      autoRows={"minmax(200px,1fr)"}
      gap="16px"
      justify="center"
    >
      {borderList.map((border, index) => (
        <BorderBox
          borderRadius={borderRadius}
          borderStyle={border}
          borderWidth={borderWidth}
          color={color}
          key={index}
        >
          {border}
        </BorderBox>
      ))}
    </Grid>
  );
};

export default Borders;

const BorderBox = styled(GridItem).attrs(({ borderRadius, borderWidth }) => ({
  style: {
    borderRadius: `${borderRadius}px`,
    borderWidth: `${borderWidth}px`,
  },
}))`
  align-items: center;
  border-color: ${({ color }) => color};
  border-style: ${({ borderStyle }) => borderStyle};
  display: flex;
  justify-content: center;
`;
