import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { time } from "ui/settings";
import { setSpace, type SpaceValue } from "ui/mixins";
import { SharedHexConsumer } from "ui/contexts";
import { whiteThm } from "ui/themes";

interface ElementProps {
  readonly $space: SpaceValue;
}

const Element = styled.div<ElementProps>`
  ${({ $space = "l" }) => setSpace(`pa${$space}`)};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  display: block;
  height: 100%;
  position: relative;
  text-align: left;
  .TileTitle {
    color: ${({ theme }) => theme.titleColor};
  }
  ${({ onClick, href, theme, to }) =>
    onClick || href || to
      ? `
    transition: box-shadow ${time.s}, transform ${time.s};
    &:hover {
      box-shadow: 6px 6px 0 0 ${theme.actionDecor};
      transform: translate(-1px, -1px);
    }`
      : ``};
`;

interface TileProps<C extends React.ElementType>
  extends React.PropsWithChildren {
  as?: C;
  space: SpaceValue;
  // TODO: add `to` and `href` props, but only when `as` is Link or `a`
}

const Tile = <C extends React.ElementType = "div">({
  space,
  children,
  ...props
}: TileProps<C>) => (
  <SharedHexConsumer>
    {({ BIFHEX }) => (
      <ThemeProvider
        theme={{ ...whiteThm, actionColor: BIFHEX, decor: BIFHEX }}
      >
        <Element $space={space} {...props}>
          {children}
        </Element>
      </ThemeProvider>
    )}
  </SharedHexConsumer>
);

export default Tile;
