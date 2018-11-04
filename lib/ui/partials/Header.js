import styled from "styled-components";

import { setSpace, setType } from "ui/mixins";
import { color, track } from "ui/settings";

const Header = styled.header`
  ${setSpace("mbk")};
  ${setType("s")};
  text-align: center;
  .small {
    ${setSpace("mvs")};
    ${setType("s")};
    color: ${color.flareBlk};
    font-weight: 700;
    letter-spacing: ${track.s};
    text-transform: uppercase;
  }
  .hero {
    ${setSpace("mvx")};
    ${setType("k")};
    color: white;
    font-weight: 900;
  }
  .para {
    ${setSpace("mvs")};
    ${setType("l")};
    color: ${color.flareBlk};
  }
  ${"" /* h1 {
    ${setType("k")};
    color: ${({ theme }) => theme.background};
    font-weight: 900;
    font-style: italic;
    text-shadow: 1px 1px 0 ${({ theme }) => theme.color},
      -1px -1px 0 ${({ theme }) => theme.color},
      -1px 1px 0 ${({ theme }) => theme.color},
      1px -1px 0 ${({ theme }) => theme.color},
      0 -1px 0 ${({ theme }) => theme.color},
      0 1px 0 ${({ theme }) => theme.color},
      -1px 0 0 ${({ theme }) => theme.color},
      1px 0 0 ${({ theme }) => theme.color};
  } */};
`;

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
