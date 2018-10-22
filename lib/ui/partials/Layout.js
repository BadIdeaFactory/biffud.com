/* eslint no-unused-expressions: 0 */
import { array, oneOfType, object } from "prop-types";
import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { defaultThm, fillThm } from "ui/themes";
import { font } from "ui/settings";
import { reset } from "assets/styles";
import { setType } from "ui/mixins";

import { Footer, Main, Topbar } from "./ofLayout";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    ${setType("m")};
    background-color: ${({ theme }) => theme.background};
    font-family: ${font.sans};
  }
  img {
    line-height: 0;
  }
  a,
  abbr {
    text-decoration: none;
  }
  *::selection { background: ${({ theme }) => theme.selectionColor}; }
  *::-moz-selection { background: ${({ theme }) => theme.selectionColor}; }
`;

const Layout = props => {
  const { children, location } = props;
  return (
    <ThemeProvider theme={defaultThm}>
      <>
        <Topbar location={location} />
        <Main>{children}</Main>
        <ThemeProvider theme={fillThm}>
          <Footer location={location} />
        </ThemeProvider>
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
