import React from "react";
import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { setSpace } from "ui/mixins";

const BodyContentEl = styled.div`
  background: white;
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

const BodyContent = props => (
  <BodyContentEl>
    <div>{props.children}</div>
  </BodyContentEl>
);

export default BodyContent;
