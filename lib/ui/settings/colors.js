import { darken, lighten } from "polished";

export const colors = {
  bifhex: [
    "#4542ed",
    "#4d44bf",
    "#4542ed",
    "#7238af",
    "#010dad",
    "#1d9112",
    "#b40be2",
    "#f94081",
    "#3d2cf7",
    "#8e48ea",
    "#512eaa",
    "#ab04e8",
    "#9e0e4a",
    "#f25c59",
    "#fc4807",
    "#5f71e8",
    "#0f966d",
    "#162daf",
    "#324ad3",
    "#d3c139",
    "#cc3726",
    "#ff5947"
  ],

  monoWt: lighten(0.48, "#767269"),
  monoHL: lighten(0.36, "#767269"),
  monoLt: lighten(0.24, "#767269"),
  monoLLt: lighten(0.12, "#767269"),
  monoM: "#767269",
  monoHD: darken(0.12, "#767269"),
  monoD: darken(0.24, "#767269"),
  monoLD: darken(0.36, "#767269"),
  monoBlk: darken(0.48, "#767269"),

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
