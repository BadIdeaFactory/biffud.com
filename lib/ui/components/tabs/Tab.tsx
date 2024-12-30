import React from "react";
import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

interface TabLinkProps {
  readonly $isActive: boolean;
}

const TabLink = styled.h2<TabLinkProps>`
  ${setSpace("pvm")};
  ${setSpace("phx")};
  ${setType("m")};
  background: ${({ $isActive }) => ($isActive ? "white" : "transparent")};
  color: ${({ $isActive, theme }) => ($isActive ? theme.actionColor : "white")};
  cursor: pointer;
  display: block;
  font-weight: 800;
  text-align: center;
  text-transform: uppercase;
  ${breakpoint.phone} {
    ${setType("s")};
  }
`;

interface TabProps extends React.PropsWithChildren {
  isActive: boolean;
  handleClick: VoidFunction;
}

const Tab: React.FC<TabProps> = ({
  isActive,
  children,
  handleClick = () => {},
}) => (
  <li>
    <TabLink $isActive={isActive} onClick={handleClick} role="button">
      {children}
    </TabLink>
  </li>
);

export default Tab;
