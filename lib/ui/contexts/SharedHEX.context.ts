import { createContext } from "react";

export const SharedHexContext = createContext({
  BIFHEX: ''
});

export const SharedHexConsumer = SharedHexContext.Consumer;
