import styled from "styled-components";
import Box from "../../Atoms/Box";
import BorderProperty from "./components/BorderProperty";
import { HFlex } from "../../Atoms/Flex";

const colorList = [
  "rgb(255,0,115)",
  "rgb(255,106,0)",
  "rgb(255,213,0)",
  "rgb(0,255,128)",
  "rgb(0,191,255)",
  "rgb(64,0,255)",
  "rgb(255,0,255)",
  "rgb(0,0,0)",
  "rgb(128,128,128)",
];

const BorderProperties = ({ borderStyles, setBorderStyles }) => {
  const { color } = borderStyles;

  const handleBorderColorChange = (color) => {
    setBorderStyles((borderStyles) => ({
      ...borderStyles,
      color,
    }));
  };

  return (
    <StyledBorderPropertes>
      <HFlex gap="24px">
        <BorderProperty title={"Border Color"}>
          <HFlex gap="8px">
            {colorList.map((colorItem, index) => {
              const isSelected = colorItem === color;

              return (
                <Box key={index}>
                  <Label
                    htmlFor={index}
                    onClick={() => handleBorderColorChange(colorItem)}
                  >
                    <RadioInput
                      name="color"
                      value={colorItem}
                      type="radio"
                      id={index}
                    />
                    <RadioItem color={colorItem} isSelected={isSelected} />
                  </Label>
                </Box>
              );
            })}
          </HFlex>
        </BorderProperty>
        <BorderProperty title={"Border Width"}></BorderProperty>
        <BorderProperty title={"Border Radius"}></BorderProperty>
      </HFlex>
    </StyledBorderPropertes>
  );
};

export default BorderProperties;

const StyledBorderPropertes = styled(Box)`
  padding: 1rem;
  background: rgb(229, 232, 239);
`;

const Label = styled.label`
  position: relative;
  cursor: pointer;
`;

const RadioInput = styled.input`
  position: absolute;
  opacity: 0;
`;

const RadioItem = styled.div`
  width: 16px;
  height: 16px;
  color: ${({ color }) => color};
  background: currentColor;
  border-radius: 50%;
  ${({ isSelected }) =>
    isSelected &&
    `
    box-shadow:0 0 0 2px #fff,
    0 0 0 4px currentColor;
  `}
`;
