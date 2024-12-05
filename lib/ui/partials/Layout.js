/* eslint no-unused-expressions: 0 */
import { array, oneOfType, object } from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { transparentize } from 'polished'
import React, { Component } from "react";

import { defaultThm } from "ui/themes";
import { breakpoint, color, font, time, zindex } from "ui/settings";
import { reset } from "assets/styles";
import { setHeight, setWidth, setType } from "ui/mixins";
import { SharedHexContext } from "ui/contexts";

import { Footer, Main, MobileMenu, Parallax, Topbar } from "./ofLayout";

const GlobalStyle = createGlobalStyle`
  ${reset};
  #___gatsby {
    overflow-x: hidden;
  }
  html {
    background: white;
  }
  body {
    ${setType("m")};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: ${font.sans};
    min-height: 100vh;
    position: relative;
    transition: background ${time.m};
    width: 100%;
    z-index: ${zindex.z1};
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
  .HeroParallax {
    transform: translateY(0);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    top: 100px;
    z-index: -${zindex.z1};
    & > * {
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
  .border {
    display: none;
  }
  ${breakpoint.tabletUp} {
    .border {
      background: white;
      display: block;
      position: fixed;
      z-index: ${zindex.z2};
    }
    .border.bt,
    .border.bb {
      ${setHeight("x")};
    }
    .border.bl,
    .border.br {
      ${setWidth("x")};
    }
    .border.bt {
      left: 0;
      right: 0;
      top: 0;
    }
    .border.bb {
      bottom: 0;
      left: 0;
      right: 0;
    }
    .border.br {
      bottom: 0;
      right: 0;
      top: 0;
    }
    .border.bl {
      bottom: 0;
      left: 0;
      top: 0;
    }
  }
`;

class Layout extends Component {
  constructor(props) {
    super(props);

    // get random bifhex
    const { hexArray } = color;
    this.BIFHEX = hexArray[Math.floor(Math.random() * hexArray.length)];

    this.state = {
      hasMobileMenu: false,
      BIFHEX: this.BIFHEX
    };

    this.detectWidth = this.detectWidth.bind(this);
    this.toggleMobileMenu = this.toggleMobileMenu.bind(this);
  }

  componentDidMount() {
    this.detectWidth();
    window.addEventListener("resize", this.detectWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.detectWidth);
  }

  detectWidth() {
    if (this.state.hasMobileMenu && window.innerWidth >= 768) {
      this.toggleMobileMenu();
    }
    return null;
  }

  toggleMobileMenu() {
    this.setState(prevState => ({ hasMobileMenu: !prevState.hasMobileMenu }));
  }

  render() {
    const { children, location } = this.props;
    const { BIFHEX, hasMobileMenu } = this.state;

    const controls = {
      toggleModal: this.toggleMobileMenu
    };

    return (
      <SharedHexContext.Provider
        value={{
          BIFHEX
        }}
      >
        <ThemeProvider
          theme={{
            ...defaultThm,
            background: BIFHEX,
            modalDecor: BIFHEX,
            actionColorLt: transparentize(0.8, BIFHEX),
          }}
        >
          <>
            <Parallax />
            <Topbar
              controls={controls}
              location={location}
            />
            <Main>{children}</Main>
            <Footer />
            <GlobalStyle
              theme={{
                ...defaultThm,
                background: BIFHEX,
                modalDecor: BIFHEX,
                actionColorLt: color.flareM,
              }}
            />
            {hasMobileMenu ? (
              <MobileMenu
                location={location}
                toggleModal={this.toggleMobileMenu}
              />
            ) : null}
            <div className="border bt" />
            <div className="border bl" />
            <div className="border br" />
            <div className="border bb" />
          </>
        </ThemeProvider>
      </SharedHexContext.Provider>
    );
  }
}

Layout.propTypes = {
  children: oneOfType([array, object]).isRequired,
  location: object.isRequired
};

export default Layout;
