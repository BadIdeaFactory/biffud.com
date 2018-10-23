import React from "react";
import styled from "styled-components";

import { Symbol } from "ui/components";
import {} from "ui/animations";
import { setSpace } from "ui/mixins";
import { breakpoint } from "ui/settings";

const FooterEl = styled.footer`
  ${setSpace("pbh")};
  ${setSpace("phh")};
  background: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoint.phone} {
    ${setSpace("phl")};
  }
`;

const FooterSeparator = styled.hr`
  ${setSpace("mvh")};
  ${setSpace("pan")};
  border-color: ${({ theme }) => theme.decor};
  border-style: solid;
  border-width: 2px 0 0 0;
  height: 0;
  width: 100%;
`;

const FooterContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  width: 100%;
  ${breakpoint.desktopUp} {
    ${setSpace("phh")};
  }
`;

const FooterFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const Footer = props => (
  <FooterEl {...props}>
    <FooterContent>Hello</FooterContent>
    <FooterContent>
      <FooterSeparator />
    </FooterContent>
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
