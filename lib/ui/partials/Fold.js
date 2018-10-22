import React from "react";
import styled from "styled-components";

import { Actionbar } from "ui/components";
import { setSpace, setType } from "ui/mixins";
import { breakpoint } from "ui/settings";

const FoldEl = styled.header`
  ${setType("s")};
  ${setSpace("mbh")};
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
  text-align: ${({ isPitch }) => (isPitch ? "left" : "center")};
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
  ${breakpoint.phone} {
    text-align: center;
  }
`;

const Fold = props => {
  const { children } = props;
  return <FoldEl {...props}>{children}</FoldEl>;
};

Fold.propTypes = {};

Fold.defaultProps = {};

export default Fold;
