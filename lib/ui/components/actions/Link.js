/* eslint jsx-a11y/anchor-has-content: 0 */
import PropTypes from "prop-types";
import { Link as GatsbyLink } from "gatsby";
import React from "react";
import styled from "styled-components";

import { defaultThm } from "ui/themes";
import { font, time, track } from "ui/settings";
import { setSpace } from "ui/mixins";

const LinkEl = styled.a`
  ${setSpace("pvx")};
  background: transparent;
  border-color: ${({ theme }) => theme.actionColorLt};
  border-style: solid;
  border-width: 0 0 2px;
  color: ${({ theme }) => theme.actionColor ?? defaultThm.actionColor};
  cursor: pointer;
  display: inline-block;
  font-family: ${font.sans};
  font-size: inherit;
  font-weight: 800;
  letter-spacing: ${track.x};
  line-height: inherit;
  text-align: center;
  text-transform: uppercase;
  transition: border ${time.s}, transform ${time.s};
  white-space: nowrap;
  &:hover {
    border-color: ${({ theme }) => theme.actionColor ?? defaultThm.actionColor};
    transform: translateX(-1px) translateY(-1px);
  }
  ${({ $isActive, theme }) =>
    $isActive
      ? `
        border-color: ${theme.actionColor ?? defaultThm.actionColor};
  `
      : ``};
`;

function Link(props) {
  const { onClick, to, isActive, ...restProps } = props;
  if (to) {
    return <LinkEl to={to} as={GatsbyLink} $isActive={isActive} {...restProps} theme={null} />;
  }
  if (onClick) {
    return <LinkEl onClick={onClick} as="a" $isActive={isActive} {...restProps} />;
  }
  return <LinkEl $isActive={isActive} {...restProps} />;
}

Link.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.object,
    PropTypes.string
  ]),
  href: PropTypes.string,
  onClick: PropTypes.func,
  theme: PropTypes.shape({
    actionColor: PropTypes.string
  }),
  to: PropTypes.string,
  isActive: PropTypes.bool
};

export default Link;
