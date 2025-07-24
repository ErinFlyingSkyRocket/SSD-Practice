import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.node,
        ...globals.browser
      }
    },
    plugins: {
      js
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },

  // React-specific config
  pluginReact.configs.flat.recommended,

  // Mocha test file support
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  }
]);
