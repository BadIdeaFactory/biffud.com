import { func, shape } from "prop-types";
import { Link } from "gatsby";
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
  ${breakpoint.phone} {
    ${setSpace("phl")};
  }
`;

const TopbarContent = styled.div``;

const TopbarFlex = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const Navigation = styled.nav``;

const Menu = styled.ul`
  display: none;
  ${breakpoint.desktopUp} {
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
  ${breakpoint.desktopUp} {
    display: none;
  }
  button {
    ${setSpace("pas")};
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
              <Link to="/">
                <h1>
                  <Logo size="l" />
                </h1>
              </Link>
            </div>
            <div>
              <Navigation>
                <Menu>
                  <MenuItem>
                    <Action
                      isActive={location.pathname.includes("/projects")}
                      to="/projects"
                    >
                      Portfolol
                    </Action>
                  </MenuItem>
                  <MenuItem>
                    <Action
                      isActive={location.pathname.includes("/tldr")}
                      to="/tldr"
                    >
                      Blog
                    </Action>
                  </MenuItem>
                  <MenuItem>
                    <Action
                      isActive={location.pathname.includes("/wat")}
                      to="/wat"
                    >
                      About
                    </Action>
                  </MenuItem>
                  <MenuItem>
                    <Action
                      isActive={location.pathname.includes("/fame")}
                      to="/fame"
                    >
                      Fame
                    </Action>
                  </MenuItem>
                  <MenuItem>
                    <Action
                      isActive={location.pathname.includes("/question")}
                      to="/question"
                    >
                      FAQ
                    </Action>
                  </MenuItem>
                  <MenuItem>
                    <Action
                      isActive={location.pathname.includes("/people")}
                      to="/people"
                    >
                      Members
                    </Action>
                  </MenuItem>
                  <MenuItem>
                    <Action
                      isActive={location.pathname.includes("/eotm")}
                      to="/eotm"
                    >
                      EOTM
                    </Action>
                  </MenuItem>
                  <MenuItem>
                    <Action
                      button
                      isActive={location.pathname.includes("/contact")}
                      to="/contact"
                    >
                      Contact
                    </Action>
                  </MenuItem>
                </Menu>
                <MenuToggle>
                  <Action button onClick={controls.toggleModal}>
                    <Icon name="menu" text="Toggle Menu" size="m" />
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
  controls: shape({
    toggleModal: func.isRequired
  }).isRequired
};

Topbar.defaultProps = {};

export default Topbar;
