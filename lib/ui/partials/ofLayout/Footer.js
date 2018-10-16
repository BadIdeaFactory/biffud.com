import React from "react";
import styled from "styled-components";

import { fadeIn } from "ui/animations";
import { time } from "ui/settings";

const FooterEl = styled.footer`
  & > * {
    animation: ${fadeIn} ${time.l} linear;
  }
`;

const FooterContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1100px;
`;

const Footer = props => (
  <FooterEl {...props}>
    <FooterContent>Footer</FooterContent>
  </FooterEl>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
