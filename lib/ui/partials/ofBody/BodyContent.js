import styled from "styled-components";

import { setSpace } from "ui/mixins";

const BodyContent = styled.div`
  ${setSpace("mvl")};
  ${setSpace("phh")};
  margin-left: auto;
  margin-right: auto;
  max-width: 600px;
`;

BodyContent.propTypes = {};

BodyContent.defaultProps = {};

export default BodyContent;
