import React from "react";
import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { setSpace } from "ui/mixins";

const BodyFootEl = styled.div`
  ${setSpace("pah")};
  ${breakpoint.phone} {
    ${setSpace("phl")};
  }
  div {
    margin-left: auto;
    margin-right: auto;
    max-width: 600px;
  }
`;

const BodyFoot = props => (
  <BodyFootEl>
    <div>{props.children}</div>
  </BodyFootEl>
);

export default BodyFoot;
