import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { setSpace } from "ui/mixins";

const BodyFoot = styled.div`
  ${setSpace("mtl")};
  ${setSpace("phh")};
  ${setSpace("pbh")};
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  ${breakpoint.phone} {
    ${setSpace("phl")};
  }
`;

BodyFoot.propTypes = {};

BodyFoot.defaultProps = {};

export default BodyFoot;
