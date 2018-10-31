import styled from "styled-components";

import { setSpace } from "ui/mixins";
import { time, zindex } from "ui/settings";

const Frame = styled.div`
  ${setSpace("bam")};
  background: ${({ theme }) => theme.background};
  border-color: ${({ theme }) => theme.decor};
  border-style: solid;
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: border ${time.m};
  z-index: -${zindex.z1};
`;

Frame.propTypes = {};

Frame.defaultProps = {};

export default Frame;
