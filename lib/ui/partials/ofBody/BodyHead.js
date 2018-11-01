import styled from "styled-components";

import { breakpoint, track } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const BodyHead = styled.div`
  ${setSpace("pah")};
  color: ${({ theme }) => theme.copy};
  text-align: center;
  & > h1 {
    ${setType("h")};
    color: ${({ theme }) => theme.titleColor};
    font-weight: 900;
  }
  & > p {
    ${setSpace("mtm")};
    ${setType("s")};
    letter-spacing: ${track.x};
    text-transform: uppercase;
  }
  ${breakpoint.phone} {
    ${setSpace("pal")};
  }
`;

BodyHead.propTypes = {};

BodyHead.defaultProps = {};

export default BodyHead;
