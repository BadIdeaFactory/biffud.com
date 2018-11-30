import {} from "prop-types";
import React from "react";
import styled from "styled-components";

import { time } from "ui/settings";
import { setSpace } from "ui/mixins";

const Element = styled.div`
  ${setSpace("pam")};
  align-items: center;
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.actionColor};
  display: inline-block;
  height: 100%;
  position: relative;
  text-align: center;
  h2 {
    ${setSpace("mtx")};
  }
  ${({ onClick, href }) =>
    onClick || href
      ? `
    transition: box-shadow ${time.s}, transform ${time.s};
    &:hover {
      box-shadow: 6px 6px 0 0 ${({ theme }) => theme.actionDecor};
      transform: translate(-1px, -1px);
    }
  `
      : ``};
`;

const Tile = props => {
  const { hd, bd } = props;
  return (
    <Element {...props}>
      {hd}
      {bd}
    </Element>
  );
};

Tile.propTypes = {};

Tile.defaultProps = {};

export default Tile;
