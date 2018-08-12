/* eslint no-unused-expressions: 0 */
import { array, oneOfType, object } from "prop-types";
import React, { Fragment } from "react";
import { injectGlobal, ThemeProvider } from "styled-components";

import { reset } from "assets/styles";
import { setType } from "ui/mixins";

// global styles
injectGlobal`
  ${reset};
  body {
    ${setType("x")};
  }
`;

const Layout = (props) => {
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
