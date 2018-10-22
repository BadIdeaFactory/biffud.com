import React from "react";
import styled from "styled-components";

import { Actionbar } from "ui/components";
import { setSpace, setType } from "ui/mixins";
import { breakpoint } from "ui/settings";

const FoldEl = styled.header`
  ${setSpace("mvh")};
  ${setType("s")};
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  text-align: center;
  h1 {
    ${setType("h")};
    color: ${({ theme }) => theme.titleColor};
    font-style: italic;
    font-weight: 900;
  }
  ${Actionbar} {
    ${setSpace("mtl")};
  }
  ${breakpoint.phone} {
    text-align: center;
  }
  ${({ isPitch }) =>
    isPitch
      ? `
    ${setSpace("pbh")};
    text-align: left;
  `
      : ``};
`;

const Fold = props => {
  const { children } = props;
  return <FoldEl {...props}>{children}</FoldEl>;
};

Fold.propTypes = {};

Fold.defaultProps = {};

export default Fold;
