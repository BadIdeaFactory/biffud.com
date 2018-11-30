import { func } from "prop-types";
import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import ScrollLock from "react-scrolllock";

import { Actionbar, Action, Icon } from "ui/components";
import { breakpoint, color } from "ui/settings";
import { setSpace, setType } from "ui/mixins";
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
  box-shadow: 10px 10px 0 0 ${({ theme }) => theme.actionDecor};
  color: ${({ theme }) => theme.color};
  height: 90vh;
  overflow-x: hidden;
  max-width: 800px;
  position: relative;
  width: 100%;
  ${breakpoint.phone} {
    overflow-y: scroll; /* has to be scroll, not auto */
    -webkit-overflow-scrolling: touch;
  }
  ${breakpoint.desktopUp} {
    height: auto;
    min-height: 60vh;
  }
  ${Actionbar} {
    ${setType("s")};
  }
`;

const ModalBody = styled.div`
  ${setSpace("pah")};
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
`;

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.closeModal = this.closeModal.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  componentWillMount() {
    document.addEventListener("keydown", this.handleKeyDown, false);
    document.body.style.overflow = "hidden";
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
    document.body.style.overflow = "auto";
  }

  handleKeyDown(event) {
    if (event.keyCode === 27) {
      this.closeModal();
    }
  }

  closeModal() {
    this.props.toggleModal();
  }

  render() {
    const { children } = this.props;
    return (
      <>
        <SharedHexConsumer>
          {({ BIFHEX }) => (
            <ThemeProvider
              theme={{ ...whiteThm, actionColor: BIFHEX, decor: BIFHEX }}
            >
              <Overlay onClick={this.closeModal}>
                <ModalEl
                  {...this.props}
                  role="dialog"
                  onClick={e => e.stopPropagation()}
                  innerRef={this.getScrollArea}
                  height={this.scrollArea && this.scrollArea.clientHeight}
                >
                  <ModalClose>
                    <Action
                      onClick={this.closeModal}
                      style={{ border: "none" }}
                    >
                      <Icon name="cross" text="Close Modal" size="l" />
                    </Action>
                  </ModalClose>
                  <ModalBody>{children}</ModalBody>
                </ModalEl>
              </Overlay>
            </ThemeProvider>
          )}
        </SharedHexConsumer>
      </>
    );
  }
}

Modal.propTypes = {
  toggleModal: func.isRequired
};

Modal.defaultProps = {};

export default Modal;
