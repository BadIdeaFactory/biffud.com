import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { color } from "ui/settings";
import { SharedHexConsumer } from "ui/contexts";
import { whiteThm } from "ui/themes";

const BodyEl = styled.section`
  color: ${({ theme }) => theme.color};
`;

const Body = props => {
  const { children } = props;
  return (
    <SharedHexConsumer>
      {({ BIFHEX }) => (
        <ThemeProvider
          theme={{ ...whiteThm, actionColor: BIFHEX, actionColorLt: color.flareM, decor: BIFHEX }}
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
