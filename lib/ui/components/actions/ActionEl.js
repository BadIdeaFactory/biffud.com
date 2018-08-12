import { Link } from "gatsby";
import styled from "styled-components";

import { time } from "ui/settings";
import { setType } from "ui/mixins";

const buttonBaseStyles = `
  ${setType("x")};
  border-style: solid;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  text-decoration: none;
  transition: border-color ${time.s}, color ${time.s};
  white-space: nowrap;
`;

const ActionEl = styled.a`
  ${buttonBaseStyles};
`;

const GatsbyActionEl = styled(Link)`
  ${buttonBaseStyles};
`;

export { ActionEl, GatsbyActionEl };
