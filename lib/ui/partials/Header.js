import styled from "styled-components";

import { setSpace, setType } from "ui/mixins";
import { breakpoint, track } from "ui/settings";

const Header = styled.header`
  ${setType("s")};
  text-align: right;
  margin-bottom: -6em;
  h1 {
    ${setType("k")};
    color: ${({ theme }) => theme.titleColor};
    font-style: italic;
    font-weight: 900;
    letter-spacing: -${track.x};
    text-shadow: 0 1px 1px ${({ theme }) => theme.background},
      0 -1px 1px ${({ theme }) => theme.background},
      1px 0 1px ${({ theme }) => theme.background},
      -1px 0 1px ${({ theme }) => theme.background};
  }
  ${breakpoint.phone} {
    margin-bottom: -4.6em;
    text-align: center;
  }
  ${breakpoint.tablet} {
    margin-bottom: -5em;
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
