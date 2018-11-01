import React from "react";
import styled from "styled-components";

import { Symbol } from "ui/components";
import { setSpace } from "ui/mixins";
import { breakpoint } from "ui/settings";

const FooterEl = styled.footer`
  ${setSpace("pbh")};
  ${setSpace("phh")};
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
  <FooterEl {...props} className="plxFoo">
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
