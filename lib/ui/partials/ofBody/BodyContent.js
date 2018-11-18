import { bool } from "prop-types";
import React from "react";
import styled from "styled-components";

import { breakpoint, color } from "ui/settings";
import { setSpace } from "ui/mixins";

const Element = styled.div`
  ${setSpace("pak")};
  background: ${({ theme }) => theme.background};
  ${breakpoint.phone} {
    ${setSpace("pal")};
  }
  ${({ limit }) =>
    limit
      ? `
    div {
      margin-left: auto;
      margin-right: auto;
      max-width: 600px;
    }
  `
      : ``};
`;

const BodyContent = props => {
  const { children, limit } = props;
  return (
    <Element {...props}>{limit ? <div>{children}</div> : children}</Element>
  );
};

BodyContent.propTypes = {
  limit: bool
};

BodyContent.defaultProps = {
  limit: null
};

export default BodyContent;
