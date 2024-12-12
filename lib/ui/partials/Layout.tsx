import React, { useEffect, useState } from "react";
import { type PageProps } from "gatsby";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { transparentize } from "polished";

import { reset } from "assets/styles";
import { SharedHexContext } from "ui/contexts";
import { setHeight, setWidth, setType } from "ui/mixins";
import { breakpoint, color, font, time, zindex } from "ui/settings";
import { defaultThm } from "ui/themes";

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

const Layout: React.FC<PageProps> = ({ children, location }) => {
  const [hasMobileMenu, setMobileMenu] = useState(false);

  // get random bifhex
  const { hexArray } = color;
  const BIFHEX = hexArray[Math.floor(Math.random() * hexArray.length)];

  useEffect(() => {
    detectWidth();
    window.addEventListener("resize", detectWidth);

    return () => {
      window.removeEventListener("resize", detectWidth);
    };
  }, []);

  function detectWidth() {
    if (hasMobileMenu && window.innerWidth >= 768) {
      toggleMobileMenu();
    }
    return null;
  }

  function toggleMobileMenu() {
    setMobileMenu(!hasMobileMenu);
  }

  const controls = {
    toggleModal: toggleMobileMenu,
  };

  return (
    <SharedHexContext.Provider
      value={{
        BIFHEX,
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
          <Topbar controls={controls} location={location} />
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
              toggleModal={toggleMobileMenu}
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
};

export default Layout;
