import styled from "styled-components/macro";

const Directions = {
  center: "center",
  start: "flex-start",
  end: "flex-end",
  between: "space-between",
  around: "space-around",
  evenly: "space-evenly",
};

const BaseFlexStyles = styled.div`
  align-items: ${({ align }) => Directions[align]};
  display: flex;
  flex-wrap: ${({ wrap }) => wrap};
  flex: ${({ flex }) => flex};
  gap: ${({ gap }) => gap};
  justify-content: ${({ justify }) => Directions[justify]};
`;

export const HFlex = styled(BaseFlexStyles)`
  flex-direction: row;
`;

export const VFlex = styled(BaseFlexStyles)`
  flex-direction: column;
`;