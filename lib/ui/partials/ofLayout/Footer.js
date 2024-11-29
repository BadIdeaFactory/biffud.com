import React from "react";
import styled from "styled-components";

import { Logo } from "ui/components";
import { setSpace } from "ui/mixins";
import { breakpoint } from "ui/settings";

const FooterEl = styled.footer`
  ${setSpace("ptl")};
  ${setSpace("pbk")};
  ${setSpace("phh")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${breakpoint.phone} {
    ${setSpace("phl")};
  }
`;

const FooterContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1240px;
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

function Footer() {
  return (
    <FooterEl className="plxFoo">
      <FooterContent>
        <FooterFlex>
          <Logo size="m" />
        </FooterFlex>
      </FooterContent>
    </FooterEl>
  )
}

Footer.propTypes = {};

export default Footer;
