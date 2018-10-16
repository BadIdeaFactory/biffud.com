import {} from "prop-types";
import React from "react";
import styled from "styled-components";

import { fadeIn } from "ui/animations";
import { time } from "ui/settings";

const MainEl = styled.main`
  & > * {
    animation: ${fadeIn} ${time.l} linear;
  }
`;

const MainContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
`;

const Main = props => {
  const { children } = props;
  return (
    <MainEl {...props}>
      <MainContent>{children}</MainContent>
    </MainEl>
  );
};

Main.propTypes = {};

Main.defaultProps = {};

export default Main;
