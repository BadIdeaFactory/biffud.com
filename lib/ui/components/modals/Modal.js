import { bool, func } from "prop-types";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

import { Action, Icon } from "ui/components";
import { breakpoint, color } from "ui/settings";
import { setSpace } from "ui/mixins";
import { SharedHexConsumer } from "ui/contexts";
import { whiteThm } from "ui/themes";

const Overlay = styled.div`
  ${setSpace("pal")};
  align-items: center;
  background: ${color.shadowHL};
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`;

const ModalClose = styled.div`
  ${setSpace("ptm")};
  ${setSpace("prm")};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
`;

const ModalEl = styled.div`
  background: ${({ theme }) => theme.modalBackground};
  border-style: solid;
  color: ${({ theme }) => theme.color};
  box-shadow: 10px 10px 0 0 ${({ theme }) => theme.modalDecor};
  max-width: 600px;
  overflow-x: hidden;
  overflow-y: auto;
  position: relative;
  width: 100%;
  ${breakpoint.phone} {
    height: 90vh;
  }
  ${breakpoint.tabletUp} {
    min-height: 60vh;
  }
`;

const ModalBody = styled.div`
  ${setSpace("pah")};
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.toggleModal();
  }

  render() {
    const { isActive, children } = this.props;
    return (
      <SharedHexConsumer>
        {({ BIFHEX }) => (
          <ThemeProvider theme={{ ...whiteThm, actionColor: BIFHEX }}>
            <Overlay {...this.props} onClick={this.closeModal}>
              <ModalEl
                {...this.props}
                role="dialog"
                onClick={e => e.stopPropagation()}
              >
                <ModalClose>
                  <Action onClick={this.closeModal} style={{ border: "none" }}>
                    <Icon name="cross" text="Close Modal" size="l" />
                  </Action>
                </ModalClose>
                <ModalBody>{children}</ModalBody>
              </ModalEl>
            </Overlay>
          </ThemeProvider>
        )}
      </SharedHexConsumer>
    );
  }
}

Modal.propTypes = {
  isActive: bool,
  toggleModal: func.isRequired
};

Modal.defaultProps = {
  isActive: null
};

export default Modal;
