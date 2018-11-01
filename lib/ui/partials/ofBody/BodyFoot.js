import styled from "styled-components";

import { setSpace } from "ui/mixins";

const BodyFoot = styled.div`
  ${setSpace("mtl")};
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

BodyFoot.propTypes = {};

BodyFoot.defaultProps = {};

export default BodyFoot;
