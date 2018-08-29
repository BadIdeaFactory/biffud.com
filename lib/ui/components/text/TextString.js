import styled from "styled-components";
import { string } from "prop-types";

import { setType } from "../../mixins";

const TextString = styled.span`
  ${({ looks }) =>
    looks === "h1"
      ? `
    ${setType("h")};
    font-family: "Press Start 2P";
  `
      : ``};
  ${({ looks }) =>
    looks === "h2"
      ? `
    ${setType("l")};
    font-family: "Press Start 2P";`
      : ``};
  ${({ looks }) => (looks === "h3" ? `` : ``)};
  ${({ looks }) => (looks === "h4" ? `` : ``)};
  ${({ looks }) => (looks === "h5" ? `` : ``)};
  ${({ looks }) => (looks === "h6" ? `` : ``)};
  ${({ looks }) => (looks === "p" ? `` : ``)};
`;

TextString.propTypes = {
  looks: string
};

TextString.defaultProps = {
  looks: "p"
};

export default TextString;
