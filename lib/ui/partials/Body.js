import PropTypes from "prop-types";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { color } from "ui/settings";
import { SharedHexConsumer } from "ui/contexts";
import { whiteThm } from "ui/themes";

const BodyEl = styled.section`
  color: ${({ theme }) => theme.color};
`;

function Body(props) {
  const { children, ...restProps } = props;
  return (
    <SharedHexConsumer>
      {({ BIFHEX }) => (
        <ThemeProvider
          theme={{ ...whiteThm, actionColor: BIFHEX, actionColorLt: color.flareM, decor: BIFHEX }}
        >
          <BodyEl {...restProps}>{children}</BodyEl>
        </ThemeProvider>
      )}
    </SharedHexConsumer>
  );
}

Body.propTypes = {
  children: PropTypes.node
};

export default Body;
