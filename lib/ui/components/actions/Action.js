import React from "react";
import { bool, oneOfType, array, object, shape, string } from "prop-types";
import { withTheme } from "styled-components";

import { color, font } from "ui/settings";
import Button from "./Button";
import Link from "./Link";
import withObfuscation from "./withObfuscation";

const ObfButton = withObfuscation(Button);
const ObfLink = withObfuscation(Link);

const Action = (props) => {
  const { obfuscated, button } = props;
  if (obfuscated) {
    if (button) {
      return <ObfButton {...props} />;
    }
    return <ObfLink {...props} />;
  }
  if (button) {
    return <Button {...props} />;
  }
  return <Link {...props} />;
};

Action.propTypes = {
  button: bool,
  children: oneOfType([array, object, string]),
  fixed: bool,
  href: string,
  obfuscated: bool,
  plain: bool,
  theme: shape({
    color: string,
    font: string,
    paint: string
  })
};

Action.defaultProps = {
  button: null,
  children: null,
  fixed: null,
  href: null,
  obfuscated: null,
  plain: null,
  theme: {
    color: color.black,
    font: font.pri,
    paint: color.black
  }
};

export default withTheme(Action);
