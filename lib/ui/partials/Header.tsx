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
`;

export default Header;
