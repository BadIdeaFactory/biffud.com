import React from "react";
import styled from "styled-components";

import {} from "ui/animations";
import { setType } from "ui/mixins";
import {} from "ui/settings";

const FoldEl = styled.footer`
  ${setType("h")};
  h1 {
    font-weight: 900;
  }
`;

const Fold = props => {
  const { children } = props;
  return <FoldEl {...props}>{children}</FoldEl>;
};

Fold.propTypes = {};

Fold.defaultProps = {};

export default Fold;
