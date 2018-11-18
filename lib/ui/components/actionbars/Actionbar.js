import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { setSpace } from "ui/mixins";

const Actionbar = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin-left: auto;
  margin-right: auto;
  position: relative;
  width: 100%;
  ${breakpoint.tabletUp} {
    & > * {
      ${setSpace("mhm")};
    }
    & > *:first-child {
      ${setSpace("mln")};
    }
    & > *:last-child {
      ${setSpace("mrn")};
    }
  }
  ${breakpoint.phone} {
    align-items: center;
    flex-direction: column;
    justify-content: center;
    & > *:not(:first-child) {
      ${setSpace("mtm")};
    }
  }
`;

export default Actionbar;
