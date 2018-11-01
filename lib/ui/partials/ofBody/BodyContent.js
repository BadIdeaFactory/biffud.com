import styled from "styled-components";

import { breakpoint } from "ui/settings";
import { setSpace } from "ui/mixins";

const BodyContent = styled.div`
  ${setSpace("mvl")};
  ${setSpace("phh")};
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
  ${breakpoint.phone} {
    ${setSpace("phl")};
  }
`;

BodyContent.propTypes = {};

BodyContent.defaultProps = {};

export default BodyContent;
