import styled from "styled-components";

import { setSpace, setType } from "ui/mixins";
import { breakpoint } from "ui/settings";

const Header = styled.header`
  ${setSpace("mbh")};
  ${setType("s")};
  text-align: center;
  h1 {
    ${setType("k")};
    color: ${({ theme }) => theme.background};
    font-weight: 900;
    text-transform: uppercase;
    text-shadow: 1px 1px 0 ${({ theme }) => theme.color},
      -1px -1px 0 ${({ theme }) => theme.color},
      -1px 1px 0 ${({ theme }) => theme.color},
      1px -1px 0 ${({ theme }) => theme.color},
      0 -1px 0 ${({ theme }) => theme.color},
      0 1px 0 ${({ theme }) => theme.color},
      -1px 0 0 ${({ theme }) => theme.color},
      1px 0 0 ${({ theme }) => theme.color};
  }
  ${breakpoint.tabletUp} {
    display: none;
  }
`;

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
