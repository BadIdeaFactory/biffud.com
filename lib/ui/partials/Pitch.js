import styled from "styled-components";

import { Actionbar } from "ui/components";
import { setSpace, setType } from "ui/mixins";

const Pitch = styled.header`
  ${setSpace("mbh")};
  ${setSpace("pbh")};
  ${setType("s")};
  margin-left: auto;
  margin-right: auto;
  max-width: 900px;
  text-align: center;
  text-align: left;
  h1 {
    ${setType("h")};
    color: ${({ theme }) => theme.titleColor};
    font-style: italic;
    font-weight: 900;
  }
  ${Actionbar} {
    ${setSpace("mtl")};
  }
`;

export default Pitch;
