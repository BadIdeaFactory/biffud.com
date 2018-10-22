import React from "react";
import styled from "styled-components";

import { Actionbar } from "ui/components";
import { setSpace, setType } from "ui/mixins";
import {} from "ui/settings";

const FoldEl = styled.footer`
  ${setType("l")};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  h1 {
    ${setType("h")};
    color: ${({ theme }) => theme.titleColor};
    font-style: italic;
    font-weight: 900;
    text-shadow: -0.09em 0.07em 0 ${({ theme }) => theme.decor};
  }
  ${Actionbar} {
    ${setSpace("mtl")};
  }
`;

const Fold = props => {
  const { children } = props;
  return <FoldEl {...props}>{children}</FoldEl>;
};

Fold.propTypes = {};

Fold.defaultProps = {};

export default Fold;
