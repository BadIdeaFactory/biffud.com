export type SizeValue = keyof typeof sizes;

export const sizes = {
  k: ["72px", "144px"],
  h: ["48px", "96px"],
  l: ["32px", "64px"],
  m: ["24px", "40px"],
  s: ["16px", "24px"],
  x: ["12px", "16px"]
};

export const size = sizes;
