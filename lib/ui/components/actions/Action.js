import React from "react";
import PropTypes from "prop-types";
import { withTheme } from "styled-components";

import Button from "./Button";
import Link from "./Link";
import withObfuscation from "./withObfuscation";

const ObfButton = withObfuscation(Button);
const ObfLink = withObfuscation(Link);

function Action(props) {
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
}

Action.propTypes = {
  button: PropTypes.bool,
  obfuscated: PropTypes.bool
};

export default withTheme(Action);
