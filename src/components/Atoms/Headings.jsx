import styled, { css } from "styled-components";

const baseHeadingStyles = css`
  font-weight: bold;
  line-height: 1;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const H1 = styled.h1`
  ${baseHeadingStyles}
`;

export const H2 = styled.h2`
  ${baseHeadingStyles}
`;

export const H3 = styled.h3`
  ${baseHeadingStyles}
`;

export const H4 = styled.h4`
  ${baseHeadingStyles}
`;

export const H5 = styled.h5`
  ${baseHeadingStyles}
`;

export const H6 = styled.h6`
  ${baseHeadingStyles}
`;
