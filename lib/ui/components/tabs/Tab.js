import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const TabLink = styled.h2`
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

function Tab(props) {
  const { isActive, children, handleClick = () => {} } = props;
  return (
    <li>
      <TabLink $isActive={isActive} onClick={handleClick} role="button">
        {children}
      </TabLink>
    </li>
  );
}

Tab.propTypes = {
  isActive: PropTypes.bool,
  handleClick: PropTypes.func,
  children: PropTypes.node
};

export default Tab;
