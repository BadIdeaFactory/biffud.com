import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { color } from "ui/settings";
import { SharedHexConsumer } from "ui/contexts";
import { whiteThm } from "ui/themes";

const BodyEl = styled.section`
  color: ${({ theme }) => theme.color};
`;

interface BodyProps extends React.PropsWithChildren {
  style?: React.CSSProperties;
}

const Body: React.FC<BodyProps> = ({ children, style }) => (
  <SharedHexConsumer>
    {({ BIFHEX }) => (
      <ThemeProvider
        theme={{
          ...whiteThm,
          actionColor: BIFHEX,
          actionColorLt: color.flareM,
          decor: BIFHEX,
        }}
      >
        <BodyEl style={style}>{children}</BodyEl>
      </ThemeProvider>
    )}
  </SharedHexConsumer>
);

export default Body;
