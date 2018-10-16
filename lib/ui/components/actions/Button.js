/* eslint jsx-a11y/anchor-has-content: 0 */
/* eslint react/button-has-type: 0 */
import { array, func, object, oneOfType, shape, string } from "prop-types";
import { Link as GatsbyButton } from "gatsby";
import React from "react";
import styled from "styled-components";

import { defaultThm } from "ui/themes";
import { color, font, time, track } from "ui/settings";
import { setSpace } from "ui/mixins";

const ButtonEl = styled.a`
  ${setSpace("pam")};
  background-color: transparent;
  border-style: solid;
  border-width: 1px;
  border-color: ${color.flareM};
  color: white;
  cursor: pointer;
  display: inline-block;
  font-family: ${font.sans};
  font-size: inherit;
  font-weight: 600;
  letter-spacing: ${track.s};
  line-height: 1em;
  outline: none;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  transition: border ${time.m};
  white-space: nowrap;
  width: ${({ block }) => (block ? `100%` : `auto`)};
  &:hover {
    border-color: white;
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
    actionColor: defaultThm.actionColor
  },
  to: null
};

export default Button;
