import { bool, func, shape } from "prop-types";
import React from "react";
import styled from "styled-components";

import { Action, Icon, Logo } from "ui/components";
import { setSpace, setType } from "ui/mixins";
import { breakpoint, time, zindex } from "ui/settings";

const TopbarEl = styled.header`
  ${setSpace("pah")};
  ${setType("s")};
  transition: background ${time.m}, box-shadow ${time.m}, padding ${time.m};
  z-index: ${zindex.z3};
  ${"" /* ${({ conditions, theme }) => {
    const { hasModal, hasOffset } = conditions;
    return `
        ${setSpace(hasOffset ? "pvm" : "pvl")};
        background-color: ${
          hasOffset && !hasModal ? theme.background : `transparent`
        };
        box-shadow: ${
          hasOffset && !hasModal ? `0 1px 5px ${color.shadowHL}` : `none`
        };
      `;
  }}; */};
  ${breakpoint.phone} {
    ${setSpace("phl")};
  }
`;

const TopbarContent = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
`;

const TopbarFlex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Navigation = styled.nav``;

const Menu = styled.ul`
  display: none;
  ${breakpoint.tabletUp} {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

const MenuItem = styled.li`
  &:not(:first-child) {
    ${setSpace("mll")};
  }
`;

const MenuToggle = styled.div`
  display: inline-block;
  ${breakpoint.tabletUp} {
    display: none;
  }
`;

const Topbar = props => {
  const { controls, location } = props;
  return (
    <>
      <TopbarEl {...props}>
        <TopbarContent>
          <TopbarFlex>
            <div>
              <Action to="/">
                <h1>
                  <Logo size="l" />
                </h1>
              </Action>
            </div>
            <div>
              <Navigation>
                <Menu>
                  <MenuItem>
                    <Action
                      isActive={location.pathname.includes("/projects")}
                      to="/projects/"
                    >
                      Portfolol
                    </Action>
                  </MenuItem>
                  <MenuItem>
                    <Action
                      isActive={location.pathname.includes("/tldr")}
                      to="/tldr/"
                    >
                      Blog
                    </Action>
                  </MenuItem>
                  <MenuItem>
                    <Action
                      isActive={location.pathname.includes("/wat")}
                      to="/wat/"
                    >
                      About
                    </Action>
                  </MenuItem>
                  <MenuItem>
                    <Action
                      isActive={location.pathname.includes("/people")}
                      to="/people/"
                    >
                      Members
                    </Action>
                  </MenuItem>
                  <MenuItem>
                    <Action
                      button
                      isActive={location.pathname.includes("/contact")}
                      to="/contact/"
                    >
                      Contact
                    </Action>
                  </MenuItem>
                </Menu>
                <MenuToggle>
                  <Action onClick={controls.toggleModal}>
                    <Icon name="menu" text="Toggle Menu" size="h" />
                  </Action>
                </MenuToggle>
              </Navigation>
            </div>
          </TopbarFlex>
        </TopbarContent>
      </TopbarEl>
    </>
  );
};

Topbar.propTypes = {
  conditions: shape({
    hasModal: bool.isRequired,
    hasOffset: bool.isRequired
  }).isRequired,
  controls: shape({
    toggleModal: func.isRequired
  }).isRequired
};

Topbar.defaultProps = {};

export default Topbar;
