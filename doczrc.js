import { css } from "docz-plugin-css";

export default {
  title: "Bad Idea Docs",
  description: "",
  src: "lib",
  themeConfig: {
    colors: {
      primary: "blue"
    }
  },
  plugins: [
    css({
      preprocessor: "postcss"
    })
  ]
};
