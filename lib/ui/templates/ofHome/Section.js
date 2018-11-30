import styled from "styled-components";

import { setSpace, setType } from "ui/mixins";

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
      display: inline-block;
      color: ${({ theme }) => theme.titleColor};
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
