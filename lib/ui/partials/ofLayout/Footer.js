import React from "react";
import styled from "styled-components";

import { Symbol } from "ui/components";
import { fadeIn } from "ui/animations";
import { setSpace } from "ui/mixins";
import { time } from "ui/settings";

const FooterEl = styled.footer`
  ${setSpace("pah")};
  justify-content: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: ${({ theme }) => theme.background};
  & > * {
    animation: ${fadeIn} ${time.l} linear;
  }
`;

const FooterContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

const FooterFlex = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Footer = props => (
  <FooterEl {...props}>
    <FooterContent>
      <FooterFlex>
        <div>
          <Symbol size="m" />
        </div>
        <div>Hm.</div>
      </FooterFlex>
    </FooterContent>
  </FooterEl>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
