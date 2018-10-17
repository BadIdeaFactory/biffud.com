import React from "react";
import styled from "styled-components";

import { Symbol } from "ui/components";
import { fadeIn } from "ui/animations";
import { setSpace } from "ui/mixins";
import { time } from "ui/settings";

const FooterEl = styled.footer`
  ${setSpace("pah")};
  & > * {
    animation: ${fadeIn} ${time.l} linear;
  }
`;

const FooterContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

const Footer = props => (
  <FooterEl {...props}>
    <FooterContent>
      <Symbol size="m" />
    </FooterContent>
  </FooterEl>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
