import styled from "styled-components";

import { setSpace, setType } from "ui/mixins";
import { breakpoint, track } from "ui/settings";

const Header = styled.header`
  ${setType("s")};
  margin-bottom: -6.2em;
  text-align: right;
  h1 {
    ${setType("k")};
    color: ${({ theme }) => theme.color};
    font-style: italic;
    font-weight: 900;
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
    margin-bottom: -5em;
    text-align: center;
  }
  ${breakpoint.tablet} {
    margin-bottom: -5.2em;
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
