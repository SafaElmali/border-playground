import styled from "styled-components";
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
      templateColumns="repeat(3,minmax(200px,1fr))"
      templateRows="repeat(3,minmax(200px,1fr))"
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

const BorderBox = styled(GridItem)`
  align-items: center;
  color: ${({ color }) => color};
  border-color: currentColor;
  border-radius: ${({ borderRadius }) => borderRadius};
  border-style: ${({ borderStyle }) => borderStyle};
  border-width: ${({ borderWidth }) => borderWidth};
  display: flex;
  justify-content: center;
`;
