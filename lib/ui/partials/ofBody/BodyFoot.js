import { oneOfType, array, object } from "prop-types";
import React from "react";
import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const Element = styled.div`
  ${setSpace("pak")};
  ${setType("s")};
  background: white;
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

const BodyFoot = props => (
  <Element>
    <div>{props.children}</div>
  </Element>
);

BodyFoot.propTypes = {
  children: oneOfType([array, object]).isRequired
};

export default BodyFoot;
