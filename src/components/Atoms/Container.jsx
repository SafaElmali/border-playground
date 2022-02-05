import styled from "styled-components";

const maxW = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
};

const Container = styled.div`
  max-width: ${({ maxWidth }) => (maxWidth ? maxW[maxWidth] : "60ch")};
  margin-inline: auto;
  margin-block: ${({ marginBlock }) => marginBlock};
  padding-inline: 1rem;
`;

export default Container;
