import React from "react";
import styled from "styled-components";

import {} from "ui/components";
import { setSpace } from "ui/mixins";
import {} from "ui/settings";

const BodyEl = styled.section`
  ${setSpace("mth")};
  ${setSpace("pah")};
  background: white;
`;

const Body = props => {
  const { children } = props;
  return <BodyEl {...props}>{children}</BodyEl>;
};

Body.propTypes = {};

Body.defaultProps = {};

export default Body;
