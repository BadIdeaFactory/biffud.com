/* eslint jsx-a11y/anchor-has-content: 0 */
/* eslint react/button-has-type: 0 */
import { array, func, object, oneOfType, shape, string } from "prop-types";
import { Link as GatsbyButton } from "gatsby";
import React from "react";
import styled from "styled-components";

import { defaultThm } from "ui/themes";
import { font, time, track } from "ui/settings";
import { setSpace } from "ui/mixins";

const ButtonEl = styled.a`
  ${setSpace("pam")};
  background-color: ${({ theme, primary }) =>
    primary ? theme.actionColor : `transparent`};
  border: 2px solid ${({ theme }) => theme.decor};
  color: ${({ primary, theme }) =>
    primary ? theme.background : theme.actionColor};
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

const Button = props => {
  const { onClick, to } = props;
  if (to) {
    return <ButtonEl as={GatsbyButton} {...props} theme={null} />;
  }
  if (onClick) {
    return <ButtonEl as="button" type="button" {...props} />;
  }
  return <ButtonEl {...props} />;
};

Button.propTypes = {
  children: oneOfType([array, object, string]),
  href: string,
  onClick: func,
  theme: shape({
    actionColor: string
  }),
  to: string
};

Button.defaultProps = {
  children: null,
  href: "",
  onClick: null,
  theme: {
    background: defaultThm.background,
    actionColor: defaultThm.actionColor
  },
  to: null
};

export default Button;
