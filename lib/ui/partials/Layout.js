/* eslint no-unused-expressions: 0 */
import { array, oneOfType, object } from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import React, { Component } from "react";

import { defaultThm } from "ui/themes";
import { breakpoint, color, font, time } from "ui/settings";
import { reset } from "assets/styles";
import { setSpace, setType } from "ui/mixins";
import { SharedHexContext } from "ui/contexts";

import { Footer, Main, Modal, Parallax, Topbar } from "./ofLayout";

const GlobalStyle = createGlobalStyle`
  ${reset};
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
    z-index: 1;
    ${breakpoint.tabletUp} {
      ${setSpace("bam")};
      border-color: ${({ theme }) => theme.decor};
      border-style: solid;
    }
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
    z-index: -1;
    & > * {
      bottom: 0;
      left: 0;
      position: absolute;
      right: 0;
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
      hasModal: false,
      BIFHEX: this.BIFHEX
    };

    this.detectWidth = this.detectWidth.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.detectWidth();
    window.addEventListener("resize", this.detectWidth);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.detectWidth);
  }

  detectWidth() {
    if (this.state.hasModal && window.innerWidth >= 768) {
      this.toggleModal();
    }
    return null;
  }

  toggleModal() {
    this.setState(prevState => ({ hasModal: !prevState.hasModal }));
  }

  render() {
    const { children, location } = this.props;
    const { BIFHEX, hasModal } = this.state;

    const controls = {
      toggleModal: this.toggleModal
    };
    const conditions = {
      hasModal
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
            background: BIFHEX
          }}
        >
          <>
            <Parallax />
            <Topbar
              conditions={conditions}
              controls={controls}
              location={location}
            />
            <Main>{children}</Main>
            <Footer location={location} />
            <GlobalStyle
              theme={{
                ...defaultThm,
                background: BIFHEX
              }}
            />
            {hasModal ? (
              <Modal location={location} controls={controls} />
            ) : null}
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

Layout.defaultProps = {};

export default Layout;
