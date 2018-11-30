import styled from "styled-components";

import { setSpace, setType } from "ui/mixins";
import { track } from "ui/settings";

const Section = styled.div`
  display: flex;
  justify-content: center;
  min-height: 75vh;
  .el {
    width: 100%;
  }
  .hd {
    ${setSpace("mbh")};
    text-align: center;
    .title {
      ${setType("h")};
      font-weight: 800;
      color: ${({ theme }) => theme.titleColor};
      ${"" /* ${setSpace("phs")};
      ${setType("s")};
      ${setSpace("pvx")};
      background: white;
      color: ${({ theme }) => theme.background};
      display: inline-block;
      font-weight: 800;
      letter-spacing: ${track.m};
      text-transform: uppercase; */}
    }
    .subtitle {
      ${setSpace("mtm")};
      ${setType("l")};
    }
  }
  &:not(:last-child) {
    ${setSpace("pbk")};
  }
`;

export default Section;
