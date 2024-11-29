import { array, func, object, oneOfType, shape, string } from "prop-types";
import { Link as GatsbyButton } from "gatsby";
import React from "react";
import styled from "styled-components";

import { defaultThm } from "ui/themes";
import { font, time, track } from "ui/settings";
import { setSpace } from "ui/mixins";

const ButtonEl = styled.a`
  ${setSpace("pam")};
  background-color: ${({ theme, $primary }) =>
    $primary ? theme.actionColor || defaultThm.actionColor : `transparent`};
  border: 2px solid ${({ theme }) => theme.decor};
  color: ${({ $primary, theme }) =>
    $primary ? theme.background || defaultThm.background : theme.actionColor || defaultThm.actionColor};
  cursor: pointer;
  display: inline-block;
  font-family: ${font.sans};
  font-size: inherit;
  font-weight: 800;
  letter-spacing: ${track.x};
  line-height: 1em;
  outline: none;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: box-shadow ${time.s}, transform ${time.s};
  white-space: nowrap;
  width: ${({ block }) => (block ? `100%` : `auto`)};
  &:hover {
    box-shadow: 4px 4px 0 0 ${({ theme }) => theme.actionDecor};
    transform: translateX(-1px) translateY(-1px);
  }
`;

function Button(props) {
  const { onClick, to, primary = false, ...restProps } = props;
  if (to) {
    return <ButtonEl as={GatsbyButton} to={to} theme={null} $primary={primary} {...restProps} />;
  }
  if (onClick) {
    return <ButtonEl as="button" type="button" onClick={onClick} $primary={primary} {...restProps} />;
  }
  return <ButtonEl $primary={primary} {...restProps} />;
}

Button.propTypes = {
  children: oneOfType([array, object, string]),
  href: string,
  onClick: func,
  theme: shape({
    actionColor: string
  }),
  to: string
};

export default Button;
