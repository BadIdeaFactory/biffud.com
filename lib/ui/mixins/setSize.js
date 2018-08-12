import { sizes } from "ui/settings";
import _fluidify from "./_fluidify";

export const setHeight = (val) =>
  _fluidify([`height`], sizes[val][0], sizes[val][1]);
export const setWidth = (val) =>
  _fluidify([`width`], sizes[val][0], sizes[val][1]);
export const setSize = (val) =>
  _fluidify([`width`, `height`], sizes[val][0], sizes[val][1]);
