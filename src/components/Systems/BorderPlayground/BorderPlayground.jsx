import { useState } from "react";
import { VFlex } from "components/Atoms/Flex";
import BorderProperties from "components/Blocks/BorderProperties/BorderProperties";
import Borders from "components/Blocks/Borders/Borders";

const BorderPlayground = () => {
  const [borderStyles, setBorderStyles] = useState({
    color: "rgb(0,0,0)",
    borderWidth: 1,
    borderRadius: 0,
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
