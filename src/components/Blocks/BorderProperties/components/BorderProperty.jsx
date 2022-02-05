import styled from "styled-components";
import { VFlex } from "../../../Atoms/Flex";
import { H5 } from "../../../Atoms/Headings";

const BorderProperty = ({ title, children }) => {
  return (
    <VFlex gap="16px" flex="1">
      <Title>{title}</Title>
      {children}
    </VFlex>
  );
};

export default BorderProperty;

const Title = styled(H5)`
  color: hsl(225deg, 20%, 30%);
  text-transform: uppercase;
`;
