import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { fadeIn } from "ui/animations";
import { Logo } from "ui/components";
import { setSpace } from "ui/mixins";
import { time } from "ui/settings";

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

const Topbar = props => (
  <TopbarEl {...props}>
    <TopbarContent>
      <Link to="/">
        <h1>
          <Logo size="l" />
        </h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/tldr/">Blog</Link>
          </li>
          <li>
            <Link to="/projects/">Portfolol</Link>
          </li>
          {/* <li>
            <Link to="/fame/">Mentions</Link>
          </li> */}
          {/* <li>
            <Link to="/people/">Members</Link>
          </li> */}
          {/* <li>
            <Link to="/question/">FAQ</Link>
          </li> */}
          {/* <li>
            <Link to="/eotm/">Emoji of the Month</Link>
          </li> */}
          <li>
            <Link to="/wat/">About</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
          {/* <li>
            <Link to="/srsbusiness/">Serious landing</Link>
          </li>
          <li>
            <Link to="/business/">BIFFUD landing</Link>
          </li> */}
          {/* <li>
            <Link to="/corporate/">Slack</Link>
          </li> */}
        </ul>
      </nav>
    </TopbarContent>
  </TopbarEl>
);

Topbar.propTypes = {};

Topbar.defaultProps = {};

export default Topbar;
