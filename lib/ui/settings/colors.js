import { darken, lighten } from "polished";

export const colors = {
  black: "black",
  white: "white",
  brand: "#fff500",

  monoWt: lighten(0.22, "#767269"),
  monoHL: lighten(0.165, "#767269"),
  monoLt: lighten(0.11, "#767269"),
  monoLLt: lighten(0.055, "#767269"),
  monoM: "#767269",
  monoHD: darken(0.055, "#767269"),
  monoD: darken(0.11, "#767269"),
  monoLD: darken(0.165, "#767269"),
  monoBlk: darken(0.22, "#767269"),

  greyWt: lighten(0.22, "#bfbfbf"),
  greyHL: lighten(0.165, "#bfbfbf"),
  greyLt: lighten(0.11, "#bfbfbf"),
  greyLLt: lighten(0.055, "#bfbfbf"),
  greyM: "#bfbfbf",
  greyHD: darken(0.055, "#bfbfbf"),
  greyD: darken(0.11, "#bfbfbf"),
  greyLD: darken(0.165, "#bfbfbf"),
  greyBlk: darken(0.22, "#bfbfbf"),

  brownWt: lighten(0.22, "#9a6a49"),
  brownHL: lighten(0.165, "#9a6a49"),
  brownLt: lighten(0.11, "#9a6a49"),
  brownLLt: lighten(0.055, "#9a6a49"),
  brownM: "#9a6a49",
  brownHD: darken(0.055, "#9a6a49"),
  brownD: darken(0.11, "#9a6a49"),
  brownLD: darken(0.165, "#9a6a49"),
  brownBlk: darken(0.22, "#9a6a49"),

  flareWt: "rgba(255,255,255,.07)",
  flareHL: "rgba(255,255,255,.17375)",
  flareLt: "rgba(255,255,255,.2775)",
  flareLLt: "rgba(255,255,255,.38125)",
  flareM: "rgba(255,255,255,.485)",
  flareHD: "rgba(255,255,255,.58875)",
  flareD: "rgba(255,255,255,.6925)",
  flareLD: "rgba(255,255,255,.79625)",
  flareBlk: "rgba(255,255,255,.9)",

  shadowWt: "rgba(0,0,0,.07)",
  shadowHL: "rgba(0,0,0,.17375)", // 0,07+((0,83/8)*1)
  shadowLt: "rgba(0,0,0,.2775)",
  shadowLLt: "rgba(0,0,0,.38125)",
  shadowM: "rgba(0,0,0,.485)",
  shadowHD: "rgba(0,0,0,.58875)",
  shadowD: "rgba(0,0,0,.6925)",
  shadowLD: "rgba(0,0,0,.79625)",
  shadowBlk: "rgba(0,0,0,.9)"
};

export const color = colors;
