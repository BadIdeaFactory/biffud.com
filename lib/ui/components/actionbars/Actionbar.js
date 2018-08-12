import styled from "styled-components";

import { setSpace } from "ui/mixins";

const Actionbar = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;
  & > * {
    ${setSpace("mas")};
  }
`;

export default Actionbar;
