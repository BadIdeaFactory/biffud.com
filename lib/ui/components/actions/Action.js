import React from "react";
import { bool, oneOfType, array, object, string } from "prop-types";
import { withTheme } from "styled-components";

import Button from "./Button";
import Link from "./Link";
import withObfuscation from "./withObfuscation";

const ObfButton = withObfuscation(Button);
const ObfLink = withObfuscation(Link);

const Action = props => {
  const { obfuscated, button, ...restProps } = props;
  if (obfuscated) {
    if (button) {
      return <ObfButton {...restProps} />;
    }
    return <ObfLink {...restProps} />;
  }
  if (button) {
    return <Button {...restProps} />;
  }
  return <Link {...restProps} />;
};

Action.propTypes = {
  button: bool,
  children: oneOfType([array, object, string]),
  href: string,
  obfuscated: bool
};

Action.defaultProps = {
  button: null,
  children: null,
  href: null,
  obfuscated: null
};

export default withTheme(Action);
