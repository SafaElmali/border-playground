import { useState } from "react";
import { VFlex } from "../../Atoms/Flex";
import BorderProperties from "../../Blocks/BorderProperties/BorderProperties";
import Borders from "../../Blocks/Borders/Borders";

const BorderPlayground = () => {
  const [borderStyles, setBorderStyles] = useState({
    color: "rgb(0,0,0)",
    borderWidth: "3px",
    borderRadius: "0px",
  });

  return (
    <VFlex gap="16px">
      <BorderProperties
        borderStyles={borderStyles}
        setBorderStyles={setBorderStyles}
      />
      <Borders borderStyles={borderStyles} />
    </VFlex>
  );
};

export default BorderPlayground;
