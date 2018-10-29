/* eslint no-unused-expressions: 0 */
import { array, oneOfType, object } from "prop-types";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import {} from "lodash";
import randomcolor from "randomcolor";
import React, { Component } from "react";

import { defaultThm } from "ui/themes";
import { font, time } from "ui/settings";
import { reset } from "assets/styles";
import { setType } from "ui/mixins";

import { Footer, Main, Modal, Parallax, Topbar } from "./ofLayout";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    ${setType("m")};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
    font-family: ${font.sans};
    transition: background ${time.l};
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
    this.state = {
      hasModal: false,
      hasOffset: false,
      hasTopPos: false
    };
    this.detectScroll = this.detectScroll.bind(this);
    this.detectWidth = this.detectWidth.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  componentDidMount() {
    this.detectScroll();
    this.detectWidth();
    window.addEventListener("scroll", this.detectScroll);
    window.addEventListener("resize", this.detectWidth);
    this.BIFHEX = randomcolor({ luminosity: "dark" });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.detectScroll);
    window.removeEventListener("resize", this.detectWidth);
  }

  detectScroll() {
    this.setState({
      hasOffset: window.pageYOffset > 0,
      hasTopPos: window.pageYOffset < 75
    });
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
    const { hasOffset, hasModal, hasTopPos } = this.state;

    const controls = {
      toggleModal: this.toggleModal
    };
    const conditions = {
      hasModal,
      hasOffset,
      hasTopPos
    };

    return (
      <ThemeProvider
        theme={{
          ...defaultThm,
          background: this.BIFHEX
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
              background: this.BIFHEX
            }}
          />
          {hasModal ? <Modal location={location} /> : null}
        </>
      </ThemeProvider>
    );
  }
}

Layout.propTypes = {
  children: oneOfType([array, object]).isRequired,
  location: object.isRequired
};

Layout.defaultProps = {};

export default Layout;
