import styled from "styled-components";

import { track } from "ui/settings";
import { setSpace, setType } from "ui/mixins";

const BodyHead = styled.div`
  ${setSpace("mbl")};
  ${setSpace("phh")};
  ${setSpace("pth")};
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
`;

BodyHead.propTypes = {};

BodyHead.defaultProps = {};

export default BodyHead;
