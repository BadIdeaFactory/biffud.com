/* eslint no-unused-expressions: 0 */
import { array, oneOfType, object } from "prop-types";
import React, { Component } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import Plx from "react-plx";

import { defaultThm } from "ui/themes";
import { font } from "ui/settings";
import { reset } from "assets/styles";
import { setType } from "ui/mixins";
import { scatteredBif1, scatteredBif2, scatteredBif3 } from "assets/images";

import { Footer, Main, Modal, Topbar } from "./ofLayout";

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    ${setType("m")};
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.color};
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

  .HeroParallax {
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
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
      hatTopPos: false
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

    const layer1plx = [
      {
        easing: "easeInOutSine",
        end: 500,
        start: 0,
        properties: [
          {
            startValue: 100,
            endValue: -400,
            property: "translateY"
          }
        ]
      },
      {
        easing: "easeInOutCubic",
        end: ".plxFoo",
        start: 550,
        properties: [
          {
            startValue: -400,
            endValue: 500,
            property: "translateY"
          },
          {
            startValue: 0,
            endValue: 180,
            property: "rotate"
          }
        ]
      }
    ];
    const layer2plx = [
      {
        easing: "easeInOutSine",
        end: 450,
        start: 0,
        properties: [
          {
            startValue: 100,
            endValue: 200,
            property: "translateY"
          },
          {
            startValue: 0,
            endValue: -5,
            property: "rotate"
          }
        ]
      },
      {
        easing: "easeInOutCubic",
        end: ".plxFoo",
        start: 500,
        properties: [
          {
            startValue: 200,
            endValue: 400,
            property: "translateY"
          },
          {
            startValue: -5,
            endValue: -190,
            property: "rotate"
          }
        ]
      }
    ];
    const layer3plx = [
      {
        easing: "easeInOutSine",
        end: 400,
        start: 0,
        properties: [
          {
            startValue: 100,
            endValue: -500,
            property: "translateY"
          },
          {
            startValue: 0,
            endValue: 3,
            property: "rotate"
          }
        ]
      },
      {
        easing: "easeInOutCubic",
        end: ".plxFoo",
        start: 450,
        properties: [
          {
            startValue: -500,
            endValue: 500,
            property: "translateY"
          },
          {
            startValue: 3,
            endValue: -180,
            property: "rotate"
          }
        ]
      }
    ];

    return (
      <ThemeProvider theme={defaultThm}>
        <>
          <Plx className="HeroParallax" parallaxData={layer1plx}>
            <img src={scatteredBif1} alt="" aria-hidden="true" width="100%" />
          </Plx>
          <Plx className="HeroParallax" parallaxData={layer2plx}>
            <img src={scatteredBif2} alt="" aria-hidden="true" width="100%" />
          </Plx>
          <Plx className="HeroParallax" parallaxData={layer3plx}>
            <img src={scatteredBif3} alt="" aria-hidden="true" width="100%" />
          </Plx>
          <Topbar
            conditions={conditions}
            controls={controls}
            location={location}
          />
          <Main>{children}</Main>
          <Footer location={location} />
          <GlobalStyle theme={defaultThm} />
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
