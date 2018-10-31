import styled from "styled-components";

import { setSpace, setType } from "ui/mixins";
import { breakpoint, color, track } from "ui/settings";

const Header = styled.header`
  ${setType("s")};
  margin-bottom: -5.5em;
  text-align: right;
  h1 {
    ${setType("k")};
    color: ${color.flareBlk};
    font-weight: 900;
    text-transform: uppercase;
    letter-spacing: -${track.x};
    text-shadow: 1px 1px 0 ${({ theme }) => theme.background},
      -1px -1px 0 ${({ theme }) => theme.background},
      -1px 1px 0 ${({ theme }) => theme.background},
      1px -1px 0 ${({ theme }) => theme.background},
      0 -1px 0 ${({ theme }) => theme.background},
      0 1px 0 ${({ theme }) => theme.background},
      -1px 0 0 ${({ theme }) => theme.background},
      1px 0 0 ${({ theme }) => theme.background};
  }
  ${breakpoint.phone} {
    margin-bottom: -4.3em;
    text-align: center;
  }
  ${breakpoint.tablet} {
    margin-bottom: -4.8em;
  }
  ${breakpoint.tabletUp} {
    h1 {
      ${setSpace("mhh")};
    }
  }
`;

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
