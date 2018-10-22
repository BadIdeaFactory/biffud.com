import React from "react";
import styled from "styled-components";

import {} from "ui/components";
import { setSpace } from "ui/mixins";
import {} from "ui/settings";

const BodyEl = styled.header`
  ${setSpace("pvh")};
  ${setSpace("mvh")};
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
`;

const Body = props => {
  const { children } = props;
  return <BodyEl {...props}>{children}</BodyEl>;
};

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
