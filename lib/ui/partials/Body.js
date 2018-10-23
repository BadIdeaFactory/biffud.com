import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { track } from "ui/settings";
import { setSpace, setType } from "ui/mixins";
import { plainThm } from "ui/themes";

const BodyEl = styled.section`
  ${setSpace("mth")};
  ${setSpace("pah")};
  background: ${({ theme }) => theme.background};
  > h2 {
    ${setType("l")};
    color: ${({ theme }) => theme.titleColor};
    font-weight: 900;
    letter-spacing: ${track.x};
    text-align: center;
    text-transform: uppercase;
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
