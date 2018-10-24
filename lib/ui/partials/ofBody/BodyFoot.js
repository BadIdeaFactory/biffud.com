import styled from "styled-components";

import {} from "ui/settings";
import { setSpace } from "ui/mixins";
import {} from "ui/themes";

const BodyFoot = styled.div`
  ${setSpace("mth")};
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

BodyFoot.propTypes = {};

BodyFoot.defaultProps = {};

export default BodyFoot;
