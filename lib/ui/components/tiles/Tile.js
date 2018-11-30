import {} from "prop-types";
import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { time } from "ui/settings";
import { setSpace } from "ui/mixins";
import { SharedHexConsumer } from "ui/contexts";
import { whiteThm } from "ui/themes";

const Element = styled.div`
  ${setSpace("pal")};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  display: block;
  height: 100%;
  position: relative;
  text-align: left;
  .TileTitle {
    color: ${({ theme }) => theme.titleColor};
  }
  ${({ onClick, href, theme }) =>
    onClick || href
      ? `
    transition: box-shadow ${time.s}, transform ${time.s};
    &:hover {
      box-shadow: 6px 6px 0 0 ${theme.actionDecor};
      transform: translate(-1px, -1px);
    }
  `
      : ``};
`;

const Tile = props => {
  const {} = props;
  return (
    <SharedHexConsumer>
      {({ BIFHEX }) => (
        <ThemeProvider
          theme={{ ...whiteThm, actionColor: BIFHEX, decor: BIFHEX }}
        >
          <Element {...props} />
        </ThemeProvider>
      )}
    </SharedHexConsumer>
  );
};

Tile.propTypes = {};

Tile.defaultProps = {};

export default Tile;
