import React from "react";
import { Link as GatsbyLink } from "gatsby";
import styled from "styled-components";

import { defaultThm } from "ui/themes";
import { font, time, track } from "ui/settings";
import { setSpace } from "ui/mixins";

interface LinkElProps {
  readonly $isActive: boolean;
}

interface LinkProps extends React.PropsWithChildren {
  href: string;
  isActive: boolean;
  theme?: {
    actionColor: string;
  };
  onClick?: () => void;
  to?: string;
}

const LinkEl = styled.a<LinkElProps>`
  ${setSpace("pvx")};
  background: transparent;
  border-color: ${({ theme }) => theme.actionColorLt ?? null};
  border-style: solid;
  border-width: 0 0 2px;
  color: ${({ theme }) => theme.actionColor ?? defaultThm.actionColor};
  cursor: pointer;
  display: inline-block;
  font-family: ${font.sans};
  font-size: inherit;
  font-weight: 800;
  letter-spacing: ${track.x};
  line-height: inherit;
  text-align: center;
  text-transform: uppercase;
  transition:
    border ${time.s},
    transform ${time.s};
  white-space: nowrap;
  &:hover {
    border-color: ${({ theme }) => theme.actionColor ?? defaultThm.actionColor};
    transform: translateX(-1px) translateY(-1px);
  }
  ${({ $isActive, theme }) =>
    $isActive
      ? `border-color: ${theme.actionColor ?? defaultThm.actionColor};`
      : ``};
`;

const Link: React.FC<LinkProps> = ({ to, onClick, isActive, ...props }) => {
  if (to) {
    return (
      <LinkEl
        to={to}
        as={GatsbyLink}
        $isActive={isActive}
        {...props}
        theme={undefined}
      />
    );
  }

  if (onClick) {
    return <LinkEl onClick={onClick} as="a" $isActive={isActive} {...props} />;
  }

  return <LinkEl $isActive={isActive} {...props} />;
};

export default Link;
