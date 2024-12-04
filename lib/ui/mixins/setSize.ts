import { sizes, type SizeValue } from "ui/settings";
import fluidify from "./ofMixins/fluidify";

export const setHeight = (val: SizeValue) =>
  fluidify([`height`], sizes[val][0], sizes[val][1]);

export const setWidth = (val: SizeValue) =>
  fluidify([`width`], sizes[val][0], sizes[val][1]);

export const setSize = (val: SizeValue) =>
  fluidify([`width`, `height`], sizes[val][0], sizes[val][1]);

// Re-export type so it can be imported with helper function
export { SizeValue };
