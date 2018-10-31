import {} from "prop-types";
import React from "react";
import ScrollLock from "react-scrolllock";
import styled from "styled-components";

import { Action } from "ui/components";
import {} from "ui/animations";
import { setSpace, setType } from "ui/mixins";
import { zindex } from "ui/settings";
import { scatteredBif1, scatteredBif2, scatteredBif3 } from "assets/images";

const ModalEl = styled.div`
  ${setSpace("bas")};
  ${setSpace("pah")};
  align-items: center;
  ${
    "" /* animation: ${bounceIn} 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; */
  }
  background-color: ${({ theme }) => theme.background};
  background-image: url(${scatteredBif1}), url(${scatteredBif2}),
    url(${scatteredBif3});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${zindex.z2};
`;

const ModalHead = styled.header``;

const ModalBody = styled.div`
  display: flex;
  flex: 1 1 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

const Navigation = styled.nav``;

const Menu = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const MenuItem = styled.li`
  ${setSpace("mvs")};
  ${setType("l")};
`;

const ModalFoot = styled.footer``;

const Modal = props => {
  const { location } = props;
  const { pathname } = location;
  return (
    <>
      <ModalEl {...props}>
        <ModalHead>Head</ModalHead>
        <ModalBody>
          <div>
            <Navigation>
              <Menu>
                <MenuItem>
                  <Action isActive={pathname.endsWith("/")} to="/">
                    Home
                  </Action>
                </MenuItem>
                <MenuItem>
                  <Action
                    isActive={pathname.includes("/projects")}
                    to="/projects"
                  >
                    Portfolol
                  </Action>
                </MenuItem>
                <MenuItem>
                  <Action isActive={pathname.includes("/tldr")} to="/tldr">
                    Blog
                  </Action>
                </MenuItem>
                <MenuItem>
                  <Action isActive={pathname.includes("/wat")} to="/wat">
                    About
                  </Action>
                </MenuItem>
                <MenuItem>
                  <Action isActive={pathname.includes("/people")} to="/people">
                    Members
                  </Action>
                </MenuItem>
                <MenuItem>
                  <Action
                    isActive={pathname.includes("/contact")}
                    to="/contact"
                  >
                    Contact
                  </Action>
                </MenuItem>
              </Menu>
            </Navigation>
          </div>
        </ModalBody>
        <ModalFoot>Foot</ModalFoot>
      </ModalEl>
      <ScrollLock />
    </>
  );
};

Modal.propTypes = {};

Modal.defaultProps = {};

export default Modal;
