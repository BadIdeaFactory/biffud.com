import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
  baseDirectory: __dirname,
  recommendedConfig: js.configs.recommended,
  allConfig: js.configs.all,
});

export default [
  ...compat.extends("airbnb", "prettier"),
  {
    settings: {
      "import/external-module-folders": ["assets", "config", "ui", "lib"],
    },

    rules: {
      camelcase: ["off"],
      "import/no-extraneous-dependencies": ["off"],
      "import/prefer-default-export": ["off"],
      "import/no-unresolved": ["off"],
      "jsx-a11y/anchor-is-valid": ["off"],
      "no-undef": ["off"],
      "react/destructuring-assignment": ["off"],
      "react/forbid-prop-types": ["off"],

      "react/jsx-filename-extension": [
        1,
        {
          extensions: [".js", ".jsx"],
        },
      ],

      "react/jsx-one-expression-per-line": ["off"],
      "react/jsx-props-no-spreading": ["off"],
      "react/no-array-index-key": ["off"],
      "react/no-danger": ["off"],
      "react/no-typos": ["off"],
      "react/require-default-props": ["off"],
    },
  },
];
