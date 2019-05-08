/* eslint no-unused-vars: 0 */
import { bool, shape, string } from "prop-types";
import styled from "styled-components";

import { setSpace, setType } from "ui/mixins";

// prettier-ignore

const Copy = styled.div`
  color: ${({ theme }) => theme.color};

  h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.titleColor};
  }

  h1, h2, h3, h4, h5, h6 {
    &:not(:first-child) {
      ${setSpace("mtl")};
    }
  }

  h1, h2, h3, h4, h5, h6,
  div,
  p,
  ul, ol {
    &:not(:last-child) {
      ${setSpace("mbm")};
    }
  }

  h1 {
    ${setType("l")};
    font-weight: 800;
  }
  h2 {
    ${setType("l")};
    font-weight: 600;
  }
  h3 {
    ${setType("m")};
    font-weight: 600;
  }
  h4 {
    ${setType("m")};
    font-weight: 600;
  }
  h5 {
    ${setType("s")};
    font-weight: 800;
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
    ${setSpace("mhl")};
    ${setSpace("mvh")};
    ${setSpace("phm")};
    ${setType("l")};
    display: block;
    font-style: italic;
    position: relative;
    p {
      color: ${({ theme }) => theme.color};
    }
    &:before,
    &:after {
      ${setType("h")};
      color: ${({ theme }) => theme.decor};
      font-weight: 600;
      line-height: 0;
      position: absolute;
    }
    &:before {
      bottom: 100%;
      content: "“";
      right: 100%;
    }
    &:after {
      content: "”";
      left: 100%;
      top: 100%;
    }
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
