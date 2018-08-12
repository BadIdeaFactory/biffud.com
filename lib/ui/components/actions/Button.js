import React from "react";
import { array, object, oneOfType, string } from "prop-types";

import { setSpace } from "../../mixins";
import { ActionEl, GatsbyActionEl } from "./ActionEl";

const buttonBase = () => `
  ${setSpace("pam")};
  line-height: 1em;
  text-align: center;
`;

const ButtonEl = ActionEl.extend`
  ${buttonBase};
  border-width: ${({ plain }) => (plain ? "0" : "2px")};
  color: ${({ isActive, theme }) => (isActive ? theme.paint : theme.color)}
  font-family: ${({ theme }) => theme.font};
  width: ${({ fixed }) => (fixed ? "200px" : "auto")};
`;
const GatsbyButtonEl = GatsbyActionEl.extend`
  ${buttonBase};
  border-width: ${({ plain }) => (plain ? "0" : "2px")};
  color: ${({ isActive, theme }) => (isActive ? theme.paint : theme.color)}
  font-family: ${({ theme }) => theme.font};
  width: ${({ fixed }) => (fixed ? "200px" : "auto")};
`;

const Button = (props) =>
  props.to === null ? <ButtonEl {...props} /> : <GatsbyButtonEl {...props} />;

Button.propTypes = {
  children: oneOfType([array, object, string]),
  href: string,
  to: string
};

Button.defaultProps = {
  children: null,
  href: "",
  to: null
};

export default Button;
