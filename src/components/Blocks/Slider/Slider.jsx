import StyledSlider from "components/Atoms/Slider";

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
