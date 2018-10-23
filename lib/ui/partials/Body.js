import React from "react";
import styled, { ThemeProvider } from "styled-components";

import {} from "ui/components";
import { setSpace, setType } from "ui/mixins";
import { plainThm } from "ui/themes";

const BodyEl = styled.section`
  ${setSpace("mth")};
  ${setSpace("pah")};
  background: ${({ theme }) => theme.background};
  box-shadow: 0 1px 1px ${({ theme }) => theme.shadow},
    0 -1px 1px ${({ theme }) => theme.shadow},
    1px 0 1px ${({ theme }) => theme.shadow},
    -1px 0 1px ${({ theme }) => theme.shadow};
  > h2 {
    ${setType("h")};
    color: ${({ theme }) => theme.titleColor};
    font-style: italic;
    font-weight: 900;
    text-align: center;
  }
`;

const Body = props => {
  const { children } = props;
  return (
    <ThemeProvider theme={plainThm}>
      <BodyEl {...props}>{children}</BodyEl>
    </ThemeProvider>
  );
};

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
