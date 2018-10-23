/* eslint no-unused-vars: 0 */
import { bool, shape, string } from "prop-types";
import styled from "styled-components";

import {} from "ui/themes";
import {} from "assets/fonts";
import { setSpace, setType } from "ui/mixins";
import {} from "ui/settings";

// prettier-ignore

const Copy = styled.div`
  color: ${({ theme }) => theme.copy};

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.titleColor};
  }

  h1, h2, h3, h4, h5, h6 {
    &:not(:first-child) {
      ${setSpace("mtl")};
    }
  }

  h1, h2, h3, h4, h5, h6,
  p,
  ul, ol,
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
    font-weight: 600;
  }
  h3 {
    ${setType("m")};
    font-weight: 900;
  }
  h4 {
    ${setType("m")};
    font-weight: 600;
  }
  h5 {
    ${setType("s")};
    font-weight: 900;
    text-transform: uppercase;
  }
  h6 {
    ${setType("s")};
    font-weight: 600;
    text-transform: uppercase;
  }
  p {
  }
  ul {
    ${setSpace("pll")};
  }
  ol {
    ${setSpace("pll")};
  }
  ul li {
    ${setSpace("mlm")};
    list-style: disc;
  }
  ol li {
    ${setSpace("mlm")};
    list-style: decimal;
  }
  a {
    color: ${({ theme }) => theme.actionColor};
    text-decoration: underline;
  }
  blockquote {
  }

  em {
    font-style: italic;
  }
  strong {
    color: ${({ theme }) => theme.titleColor};
    font-weight: 600;
  }

  .gatsby-resp-image-wrapper {
    max-width: none !important;
  }
`;

Copy.propTypes = {};

Copy.defaultProps = {};

export default Copy;
