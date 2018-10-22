import React from "react";
import styled from "styled-components";

import { Action, Logo } from "ui/components";
import { fadeIn } from "ui/animations";
import { setSpace, setType } from "ui/mixins";
import { track, time } from "ui/settings";

const TopbarEl = styled.header`
  ${setSpace("pah")};
  & > * {
    animation: ${fadeIn} ${time.l} linear;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const MenuItem = styled.li`
  &:not(:first-child) {
    ${setSpace("mll")};
  }
  & > * {
    ${setSpace("pax")};
    ${setType("m")};
    line-height: 1em;
    text-transform: uppercase;
  }
`;

const Topbar = props => {
  const { location } = props;
  return (
    <TopbarEl {...props}>
      <TopbarContent>
        <TopbarFlex>
          <Action to="/">
            <h1>
              <Logo size="l" />
            </h1>
          </Action>
          <Navigation>
            <Menu>
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
                  isActive={location.pathname.includes("/projects")}
                  to="/projects/"
                >
                  Portfolol
                </Action>
              </MenuItem>
              {/* <MenuItem>
              <Link to="/fame/">Mentions</Link>
            </MenuItem> */}
              <MenuItem>
                <Action
                  isActive={location.pathname.includes("/people")}
                  to="/people/"
                >
                  Members
                </Action>
              </MenuItem>
              {/* <MenuItem>
              <Link to="/question/">FAQ</Link>
            </MenuItem> */}
              {/* <MenuItem>
              <Link to="/eotm/">Emoji of the Month</Link>
            </MenuItem> */}
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
                  button
                  isActive={location.pathname.includes("/contact")}
                  to="/contact/"
                >
                  Let’s talk
                </Action>
              </MenuItem>
              {/* <MenuItem>
              <Link to="/srsbusiness/">Serious landing</Link>
            </MenuItem>
            <MenuItem>
              <Link to="/business/">BIFFUD landing</Link>
            </MenuItem> */}
              {/* <MenuItem>
              <Link to="/corporate/">Slack</Link>
            </MenuItem> */}
            </Menu>
          </Navigation>
        </TopbarFlex>
      </TopbarContent>
    </TopbarEl>
  );
};

Topbar.propTypes = {};

Topbar.defaultProps = {};

export default Topbar;
