import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const BodyEl = styled.section`
  ${setSpace("mth")};
  ${setSpace("pah")};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  > h1 {
    ${setType("h")};
    color: ${({ theme }) => theme.titleColor};
    font-style: italic;
    font-weight: 900;
    text-align: center;
  }
  ${breakpoint.phone} {
    ${setSpace("phl")};
  }
`;

const Body = props => {
  const { children } = props;
  return <BodyEl {...props}>{children}</BodyEl>;
};

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
