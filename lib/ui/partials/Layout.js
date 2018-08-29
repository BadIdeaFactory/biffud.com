/* eslint no-unused-expressions: 0 */
import { array, oneOfType, object } from "prop-types";
import React, { Fragment } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";

import { normalize, reset } from "assets/styles";

// global styles
injectGlobal`
  ${reset};
  ${normalize};
`;

const Layout = props => {
  const { children, location } = props;
  return (
    <ThemeProvider theme={{}}>
      <Fragment>{children}</Fragment>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: oneOfType([array, object]).isRequired,
  location: object.isRequired
};

Layout.defaultProps = {};

export default Layout;
