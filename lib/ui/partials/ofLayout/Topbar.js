import { Link } from "gatsby";
import React from "react";
import styled from "styled-components";

import { fadeIn } from "ui/animations";
import { time } from "ui/settings";

const TopbarEl = styled.header`
  & > * {
    animation: ${fadeIn} ${time.l} linear;
  }
`;

const TopbarContent = styled.div``;

const Topbar = props => (
  <TopbarEl {...props}>
    <TopbarContent>
      <Link to="/">
        <h1 looks="h2">Bad Idea Factory</h1>
      </Link>
      <nav>
        <ul>
          <li>
            <Link to="/tldr/">Blog</Link>
          </li>
          <li>
            <Link to="/projects/">Portfolololio</Link>
          </li>
          <li>
            <Link to="/fame/">Mentions</Link>
          </li>
          <li>
            <Link to="/people/">Members</Link>
          </li>
          <li>
            <Link to="/question/">FAQ</Link>
          </li>
          <li>
            <Link to="/eotm/">Emoji of the Month</Link>
          </li>
          <li>
            <Link to="/wat/">About the company</Link>
          </li>
          <li>
            <Link to="/srsbusiness/">Serious landing</Link>
          </li>
          <li>
            <Link to="/business/">BIFFUD landing</Link>
          </li>
          <li>
            <Link to="/corporate/">Slack</Link>
          </li>
        </ul>
      </nav>
    </TopbarContent>
  </TopbarEl>
);

Topbar.propTypes = {};

Topbar.defaultProps = {};

export default Topbar;
