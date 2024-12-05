import React, { type PropsWithChildren } from "react";
import styled from "styled-components";

import { breakpoint, time } from "ui/settings";
import { fadeIn } from "ui/animations";
import { setSpace } from "ui/mixins";

const MainEl = styled.main`
  ${setSpace("pah")};
  & > * {
    animation: ${fadeIn} ${time.l} linear;
  }
  ${breakpoint.phone} {
    ${setSpace("phl")};
  }
`;

const MainContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
`;

const Main: React.FC<PropsWithChildren> = ({ children, ...props }) => (
  <MainEl {...props}>
    <MainContent>{children}</MainContent>
  </MainEl>
);

export default Main;
