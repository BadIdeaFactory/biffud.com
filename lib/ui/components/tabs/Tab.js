import { bool, func } from "prop-types";
import React from "react";
import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const TabLink = styled.h2`
  ${setSpace("pvm")};
  ${setSpace("phx")};
  ${setType("m")};
  background: ${({ isActive }) => (isActive ? "white" : "transparent")};
  color: ${({ isActive, theme }) => (isActive ? theme.actionColor : "white")};
  cursor: pointer;
  display: block;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  ${breakpoint.phone} {
    ${setType("s")};
  }
`;

const Tab = props => {
  const { isActive, children, handleClick } = props;
  return (
    <li>
      <TabLink isActive={isActive} onClick={handleClick} role="button">
        {children}
      </TabLink>
    </li>
  );
};

Tab.propTypes = {
  isActive: bool,
  handleClick: func
};

Tab.defaultProps = {
  isActive: null,
  handleClick: null
};

export default Tab;
