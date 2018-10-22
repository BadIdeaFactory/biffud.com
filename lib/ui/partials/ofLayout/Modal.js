import { string } from "prop-types";
import React, { Fragment } from "react";
import ScrollLock from "react-scrolllock";
import styled, { ThemeProvider } from "styled-components";

import {} from "ui/components";
import { fadeIn } from "ui/animations";
import { defaultThm } from "ui/themes";
import { setSpace } from "ui/mixins";
import { time, zindex } from "ui/settings";

const ModalEl = styled.div`
  ${setSpace("pah")};
  align-items: center;
  animation: ${fadeIn} ${time.s} linear;
  background: ${({ theme }) => theme.background};
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: ${zindex.z2};
`;

const Modal = props => {
  const { location } = props;
  const { pathname } = location;
  return (
    <ThemeProvider theme={defaultThm}>
      <Fragment>
        <ModalEl {...props}>Hello</ModalEl>
        <ScrollLock />
      </Fragment>
    </ThemeProvider>
  );
};

Modal.propTypes = {
  lingo: string.isRequired
};

Modal.defaultProps = {};

export default Modal;
