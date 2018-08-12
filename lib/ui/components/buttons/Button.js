import { bool } from "prop-types";
import css from "styled-components";
import React from "react";

import { color, radius, setSpace, setType } from "ui/utils";

const ButtonEl = css.button`
  ${setSpace("phs")};
  ${setSpace("pvx")};
  ${setType("m")};
  background: none;
  border-radius: ${radius.a};
  border: 1px solid magenta;
  box-shadow: none;
  color: ${color.black};
  cursor: pointer;
  outline: none;
`;

const Button = (props) => <ButtonEl {...props} />;

Button.propTypes = {
  primary: bool
};

Button.defaultProps = {
  primary: false
};

export default Button;
