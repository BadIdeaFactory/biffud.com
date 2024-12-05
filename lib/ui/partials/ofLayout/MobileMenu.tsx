import React from "react";
import { type PageProps } from "gatsby";
import styled from "styled-components";

import { Action, Modal } from "ui/components";
import { setSpace, setType } from "ui/mixins";

const MobileMenuBody = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  position: relative;
`;

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

interface MobileMenuProps {
  location: PageProps["location"];
  toggleModal: VoidFunction;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  location,
  toggleModal,
  ...props
}) => {
  const { pathname } = location;

  return (
    <Modal toggleModal={toggleModal} {...props}>
      <MobileMenuBody>
        <nav>
          <Menu>
            <MenuItem>
              <Action $isActive={pathname.endsWith("/")} to="/">
                Home
              </Action>
            </MenuItem>
            <MenuItem>
              <Action $isActive={pathname.includes("/projects")} to="/projects">
                Portfolol
              </Action>
            </MenuItem>
            <MenuItem>
              <Action $isActive={pathname.includes("/tldr")} to="/tldr">
                Blog
              </Action>
            </MenuItem>
            <MenuItem>
              <Action $isActive={pathname.includes("/wat")} to="/wat">
                About
              </Action>
            </MenuItem>
            <MenuItem>
              <Action $isActive={pathname.includes("/fame")} to="/fame">
                Fame
              </Action>
            </MenuItem>
            <MenuItem>
              <Action $isActive={pathname.includes("/question")} to="/question">
                FAQ
              </Action>
            </MenuItem>
            <MenuItem>
              <Action $isActive={pathname.includes("/people")} to="/people">
                People
              </Action>
            </MenuItem>
            <MenuItem>
              <Action $isActive={pathname.includes("/eotm")} to="/eotm">
                EOTM
              </Action>
            </MenuItem>
            <MenuItem>
              <Action $isActive={pathname.includes("/contact")} to="/contact">
                Contact
              </Action>
            </MenuItem>
          </Menu>
        </nav>
      </MobileMenuBody>
    </Modal>
  );
};

export default MobileMenu;
