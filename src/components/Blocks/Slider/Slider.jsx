import styled from "styled-components/macro";

const Slider = ({ setValue, property, propertyValue }) => {
  const handleValueChange = (event) => {
    setValue((prevState) => ({
      ...prevState,
      [property]: event.target.value,
    }));
  };

  return (
    <StyledSlider
      type="range"
      min={"1"}
      max={"24"}
      value={propertyValue}
      onChange={handleValueChange}
    />
  );
};

export default Slider;

const StyledSlider = styled.input`
  appearance: none;
  background-color: rgb(200, 202, 208);
  width: 100%;
  height: 4px;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgb(38, 46, 63);
    cursor: pointer;
    &:active {
      background: #1862f7;
    }

    &:focus {
      outline: none;
    }
  }

  &::-moz-range-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    background: rgb(38, 46, 63);
    cursor: pointer;
    &:active {
      background: #1862f7;
    }

    &:focus {
      outline: none;
    }
  }
`;
