/* eslint no-unused-expressions: 0 */
import { Link } from "gatsby";
import { array, oneOfType, object } from "prop-types";
import React from "react";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";

import { normalize, reset } from "assets/styles";
import { defaultThm } from "ui/themes";

const GlobalStyle = createGlobalStyle`
  ${reset};
  ${normalize};
`;

const Head = styled.header``;
const Main = styled.main``;

const Layout = props => {
  const { children, location } = props;
  return (
    <ThemeProvider theme={defaultThm}>
      <>
        <Head>
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
        </Head>
        <Main>{children}</Main>
        <GlobalStyle theme={defaultThm} />
      </>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: oneOfType([array, object]).isRequired,
  location: object.isRequired
};

Layout.defaultProps = {};

export default Layout;
