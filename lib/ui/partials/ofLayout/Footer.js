import React from "react";
import styled from "styled-components";

import { Symbol } from "ui/components";
import {} from "ui/animations";
import { setSpace } from "ui/mixins";
import {} from "ui/settings";

const FooterEl = styled.footer`
  ${setSpace("pah")};
  background: ${({ theme }) => theme.background};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FooterContent = styled.div`
  ${setSpace("phh")};
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  width: 100%;
`;

const FooterFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
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
