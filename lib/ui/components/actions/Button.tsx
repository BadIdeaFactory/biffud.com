import React from "react";
import { Link as GatsbyButton } from "gatsby";
import styled from "styled-components";

import { defaultThm } from "ui/themes";
import { font, space, time, track } from "ui/settings";
import fluidify from "ui/mixins/ofMixins/fluidify";

// Overpass capitals sit this far above the middle of the line box, so the box
// is shifted up around the text to keep the label optically centered.
const capOffset = "0.1em";

interface ButtonElProps {
  readonly $primary: boolean;
  readonly $block: boolean;
}

interface ButtonProps extends React.PropsWithChildren {
  href: string;
  to: string;
  primary?: boolean;
  block?: boolean;
  onClick: () => void;
  theme?: {
    actionColor: string;
  };
}

const ButtonEl = styled.a<ButtonElProps>`
  ${fluidify("--button-padding", space.m[0], space.m[1])};
  background-color: ${({ theme, $primary }) =>
    $primary ? (theme.actionColor ?? defaultThm.actionColor) : `transparent`};
  border: 2px solid ${({ theme }) => theme.decor};
  color: ${({ $primary, theme }) =>
    $primary
      ? (theme.background ?? defaultThm.background)
      : (theme.actionColor ?? defaultThm.actionColor)};
  cursor: pointer;
  display: inline-block;
  font-family: ${font.sans};
  font-size: inherit;
  font-weight: 800;
  letter-spacing: ${track.x};
  line-height: 1em;
  outline: none;
  padding: var(--button-padding);
  padding-bottom: calc(var(--button-padding) - ${capOffset});
  padding-top: calc(var(--button-padding) + ${capOffset});
  position: relative;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  top: -${capOffset};
  transition:
    box-shadow ${time.s},
    transform ${time.s};
  white-space: nowrap;
  width: ${({ $block }) => ($block ? `100%` : `auto`)};
  &:hover {
    box-shadow: 4px 4px 0 0 ${({ theme }) => theme.actionDecor};
    transform: translateX(-1px) translateY(-1px);
  }
`;

const Button: React.FC<ButtonProps> = ({
  to,
  onClick,
  primary = false,
  block = false,
  ...props
}) => {
  if (to) {
    return (
      <ButtonEl
        as={GatsbyButton}
        to={to}
        theme={undefined}
        $primary={primary}
        $block={block}
        {...props}
      />
    );
  }

  if (onClick) {
    return (
      <ButtonEl
        as="button"
        type="button"
        onClick={onClick}
        $primary={primary}
        $block={block}
        {...props}
      />
    );
  }

  return <ButtonEl $primary={primary} $block={block} {...props} />;
};

export default Button;
