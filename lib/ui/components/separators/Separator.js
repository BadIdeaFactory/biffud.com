import { bool, string } from "prop-types";
import styled from "styled-components";

import { color } from "../../settings";
import { setSpace } from "../../mixins";

const Separator = styled.hr`
  ${setSpace("pan")};
  border-style: solid;
  ${(props) =>
    props.dir === "v"
      ? `
      ${setSpace(`mh${props.size}`)};
      ${setSpace("mvn")};
      border-color: ${props.silent ? `transparent` : color.black};
      border-width: 0 0 0 2px;
      display: inline-block;
      height: 1em;
      vertical-align: text-top;
      transform: translateY(9%);
  `
      : `
      ${setSpace("mhn")}
      ${setSpace(`mv${props.size}`)};
      border-color: ${props.silent ? `transparent` : color.black};
      border-width: 2px 0 0;
      display: block;
      width: 100%;
  `};
`;

Separator.propTypes = {
  dir: string,
  size: string,
  silent: bool
};

Separator.defaultProps = {
  dir: "h",
  size: "m",
  silent: false
};

export default Separator;
