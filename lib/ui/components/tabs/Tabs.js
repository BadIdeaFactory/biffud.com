import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

import "ui/themes";
import "ui/mixins";

const TabsEl = styled.ol`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  & > li {
    flex: 0 0 ${({ $count }) => 100 / $count}%;
    align-items: stretch;
    align-content: stretch;
  }
`;

function Tabs({ children, count, ...restProps }) {
  return <nav>
    <TabsEl $count={count} {...restProps}>{children}</TabsEl>
  </nav>
}

Tabs.propTypes = {
  children: PropTypes.node,
  count: PropTypes.number
};

export default Tabs;
