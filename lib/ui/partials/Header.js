import styled from "styled-components";

import { setSpace, setType } from "ui/mixins";
import { color, track } from "ui/settings";

const Header = styled.header`
  ${setSpace("mbh")};
  ${setType("s")};
  text-align: center;
  .small {
    ${setSpace("mvs")};
    ${setType("s")};
    color: ${color.flareBlk};
    font-weight: 600;
    letter-spacing: ${track.s};
    text-transform: uppercase;
  }
  .hero {
    ${setSpace("mvx")};
    ${setType("k")};
    color: white;
    letter-spacing: -${track.x};
    font-weight: 800;
  }
  .para {
    ${setSpace("mvs")};
    ${setType("l")};
    color: ${color.flareBlk};
  }
  ${"" /* h1 {
    ${setType("k")};
    color: ${({ theme }) => theme.background};
    font-weight: 800;
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
