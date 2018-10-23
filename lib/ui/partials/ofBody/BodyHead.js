import styled from "styled-components";

import { track } from "ui/settings";
import { setSpace, setType } from "ui/mixins";
import {} from "ui/themes";

const BodyHead = styled.div`
  ${setSpace("mbh")};
  color: ${({ theme }) => theme.copy};
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
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
