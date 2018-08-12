import css from "styled-components";
import { arrayOf, bool, number, oneOfType, string } from "prop-types";

import { breakpoint } from "ui/settings";
import { setSpace } from "ui/mixins";

const Container = css.div`
  position: relative;
  ${({ padded }) => (padded ? setSpace(size) : "")};
  ${({ flexed }) =>
    flexed
      ? `
    align-items: center;
    display: flex;
    flex-direction: ${flexed};
    justify-content: center;
  `
      : ``};
  ${({ flex }) =>
    flex !== null
      ? `
    flex: ${flex[0]} ${flex[1]} ${flex[2]};
  `
      : ``};
  text-align: ${({ align }) => align || "inherit"};
  min-height: ${({ cover }) => (cover ? "100vh" : "none")};
  ${({ limit }) => {
    if (limit === "x") {
      return `
        margin-left: auto;
        margin-right: auto;
        max-width: 400px;
        ${breakpoint.tablet} {
          max-width: 480px;
        }
        ${breakpoint.desktop} {
          max-width: 560px;
        }
        ${breakpoint.hdesktop} {
          max-width: 640px;
        }
        `;
    }
    if (limit === "s") {
      return `
        margin-left: auto;
        margin-right: auto;
        ${breakpoint.tablet} {
          max-width: 500px;
        }
        ${breakpoint.desktop} {
          max-width: 580px;
        }
        ${breakpoint.hdesktop} {
          max-width: 660px;
        }
        `;
    }
    if (limit === "m") {
      return `
        margin-left: auto;
        margin-right: auto;
        ${breakpoint.tablet} {
          max-width: 600px;
        }
        ${breakpoint.desktop} {
          max-width: 800px;
        }
        ${breakpoint.hdesktop} {
          max-width: 1000px;
        }
      `;
    }
    if (limit === "l") {
      return `
        margin-left: auto;
        margin-right: auto;
        ${breakpoint.tablet} {
          max-width: 768px;
        }
        ${breakpoint.desktop} {
          max-width: 1024px;
        }
        ${breakpoint.hdesktop} {
          max-width: 1200px;
        }
      `;
    }
    return null;
  }}`;

Container.propTypes = {
  align: string,
  flex: arrayOf(oneOfType([number, string])),
  cover: bool,
  flexed: string,
  limit: string,
  padded: bool
};

Container.defaultProps = {
  align: null,
  flex: null,
  cover: null,
  flexed: null,
  limit: null,
  padded: null
};

export default Container;
