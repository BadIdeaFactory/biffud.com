import React from "react";
import styled from "styled-components";

import "ui/themes";
import "ui/mixins";

interface TabsElProps {
  readonly $count: number;
}
const TabsEl = styled.ol<TabsElProps>`
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

interface TabsProps extends React.PropsWithChildren {
  count: number;
}

const Tabs: React.FC<TabsProps> = ({ children, count, ...props }) => (
  <nav>
    <TabsEl $count={count} {...props}>
      {children}
    </TabsEl>
  </nav>
);

export default Tabs;
