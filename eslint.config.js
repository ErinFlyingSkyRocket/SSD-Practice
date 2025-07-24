import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  // Base JS config
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node
      }
    },
    plugins: {
      js
    },
    rules: {
      ...js.configs.recommended.rules
    }
  },

  // ✅ React config (now wrapped properly)
  {
    files: ["**/*.{jsx,js}"],
    ...pluginReact.configs.flat.recommended,
    settings: {
      react: {
        version: "detect"
      }
    }
  },

  // ✅ Mocha test support (test.js)
  {
    files: ["tests/**/*.js"],
    languageOptions: {
      globals: {
        ...globals.mocha
      }
    }
  }
]);
