/* eslint no-unused-vars: 0 */
import { bool, shape, string } from "prop-types";
import styled from "styled-components";

import {} from "ui/themes";
import {} from "assets/fonts";
import { setSpace, setType } from "ui/mixins";
import {} from "ui/settings";

const Copy = styled.div`
  color: ${({ theme }) => theme.copy};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.titleColor};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &:not(:first-child) {
      ${setSpace("mtl")};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ul,
  ol,
  blockquote {
    &:not(:last-child) {
      ${setSpace("mbm")};
    }
  }

  h1 {
    ${setType("l")};
    font-weight: 900;
  }
  h2 {
    ${setType("l")};
  }
  h3 {
    ${setType("m")};
  }
  h4 {
    ${setType("s")};
  }
  h5 {
  }
  h6 {
  }
  p {
  }
  ul {
  }
  ol {
  }
  ul li {
  }
  ol li {
  }
  a {
    color: ${({ theme }) => theme.actionColor};
    text-decoration: underline;
  }
  blockquote {
  }
`;

Copy.propTypes = {};

Copy.defaultProps = {};

export default Copy;
