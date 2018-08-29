/* eslint no-unused-expressions: 0 */
import { array, oneOfType, object } from "prop-types";
import React, { Fragment } from "react";
import styled, { injectGlobal, ThemeProvider } from "styled-components";

import { Action, Title } from "ui/components";
import { normalize, reset } from "assets/styles";

// global styles
injectGlobal`
  ${reset};
  ${normalize};
`;

const Head = styled.header``;
const Main = styled.main``;

const Layout = props => {
  const { children, location } = props;
  return (
    <ThemeProvider theme={{}}>
      <Fragment>
        <Head>
          <Action to="/">
            <Title looks="h2">Bad Idea Factory</Title>
          </Action>
          <nav>
            <ul>
              <li>
                <Action to="/tldr/">Blog</Action>
              </li>
              <li>
                <Action to="/projects/">Portfolololio</Action>
              </li>
              <li>
                <Action to="/fame/">Mentions</Action>
              </li>
              <li>
                <Action to="/people/">Members</Action>
              </li>
              <li>
                <Action to="/question/">FAQ</Action>
              </li>
              <li>
                <Action to="/eotm/">Emoji of the Month</Action>
              </li>
              <li>
                <Action to="/wat/">About the company</Action>
              </li>
              <li>
                <Action to="/srsbusiness/">Serious landing</Action>
              </li>
              <li>
                <Action to="/business/">BIFFUD landing</Action>
              </li>
              <li>
                <Action to="/corporate/">Slack</Action>
              </li>
            </ul>
          </nav>
        </Head>

        <Main>{children}</Main>
      </Fragment>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: oneOfType([array, object]).isRequired,
  location: object.isRequired
};

Layout.defaultProps = {};

export default Layout;
