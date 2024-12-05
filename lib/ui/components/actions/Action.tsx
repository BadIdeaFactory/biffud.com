import React from "react";
import { withTheme } from "styled-components";

import Button from "./Button";
import Link from "./Link";
import withObfuscation from "./withObfuscation";

interface ActionProps extends React.PropsWithChildren {
  button: boolean
  obfuscated: boolean
}

const ObfButton = withObfuscation(Button);
const ObfLink = withObfuscation(Link);

const Action: React.FC<ActionProps> = ({ obfuscated = false, button = false, ...props }) => {
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
}

export default withTheme(Action);
