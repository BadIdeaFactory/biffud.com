import {} from "prop-types";
import React from "react";
import styled from "styled-components";

import {} from "ui/themes";
import {} from "ui/mixins";

const TabsEl = styled.ol`
  display: flex;
  flex-direction: row;
  width: 100%;
  overflow-x: auto;
  & > li {
    flex: 0 0 ${({ count }) => 100 / count}%;
    align-items: stretch;
    align-content: stretch;
  }
`;

const Tabs = props => (
  <nav>
    <TabsEl {...props}>{props.children}</TabsEl>
  </nav>
);

Tabs.propTypes = {};

Tabs.defaultProps = {};

export default Tabs;
