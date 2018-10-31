import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { whiteThm } from "ui/themes";
import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";
import { SharedHexConsumer } from "ui/contexts";

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
  return (
    <SharedHexConsumer>
      {({ BIFHEX }) => (
        <ThemeProvider
          theme={{ ...whiteThm, actionColor: BIFHEX, decor: BIFHEX }}
        >
          <BodyEl {...props}>{children}</BodyEl>
        </ThemeProvider>
      )}
    </SharedHexConsumer>
  );
};

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
