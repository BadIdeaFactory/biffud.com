import React, { useEffect, useRef } from "react";
import styled, { ThemeProvider } from "styled-components";

import { Actionbar, Action, Icon } from "ui/components";
import { SharedHexConsumer } from "ui/contexts";
import { setSpace, setType } from "ui/mixins";
import { breakpoint, color } from "ui/settings";
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
  overflow-y: auto;
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
  height: 100%;
`;

interface ModalProps extends React.PropsWithChildren {
  toggleModal: VoidFunction;
}

const Modal: React.FC<ModalProps> = ({ children, toggleModal, ...props }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown, false);
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    document.body.style.height = "100%";
    document.body.style.position = "fixed";
    ref.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "auto";
      document.body.style.overflow = "auto";
      document.body.style.height = "auto";
      document.body.style.position = "relative";
    };
  }, []);

  function handleKeyDown(event: KeyboardEvent) {
    if (event.key === "Escape") {
      closeModal();
    }
  }

  function closeModal() {
    toggleModal();
  }

  return (
    <SharedHexConsumer>
      {({ BIFHEX }) => (
        <ThemeProvider
          theme={{ ...whiteThm, actionColor: BIFHEX, decor: BIFHEX }}
        >
          <Overlay onClick={closeModal}>
            <ModalEl
              {...props}
              role="dialog"
              onClick={(e) => e.stopPropagation()}
              ref={ref}
            >
              <ModalClose>
                <Action onClick={closeModal} style={{ border: "none" }}>
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
};

export default Modal;
