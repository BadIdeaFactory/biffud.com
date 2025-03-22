import styled from "styled-components";

import { setSpace } from "ui/mixins";

const Section = styled.div`
  ${setSpace("mvk")};
  display: flex;
  justify-content: center;
  .el {
    width: 100%;
  }
  &:not(:last-child) {
    ${setSpace("pbk")};
  }
`;

export default Section;
