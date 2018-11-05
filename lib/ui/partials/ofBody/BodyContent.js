import { bool } from "prop-types";
import React from "react";
import styled from "styled-components";

import { breakpoint, color } from "ui/settings";
import { setSpace } from "ui/mixins";

const BodyContentEl = styled.div`
  ${setSpace("pak")};
  background: ${color.flareBlk};
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
    <BodyContentEl {...props}>
      {limit ? <div>{children}</div> : children}
    </BodyContentEl>
  );
};

BodyContent.propTypes = {
  limit: bool
};

BodyContent.defaultProps = {
  limit: null
};

export default BodyContent;
