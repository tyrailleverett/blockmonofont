import { FlatCompat } from "@eslint/eslintrc";
import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import tailwind from "eslint-plugin-tailwindcss";
import unicorn from "eslint-plugin-unicorn";
import globals from "globals";
import path from "path";
import tseslint from "typescript-eslint";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const compat = new FlatCompat({
  baseDirectory: __dirname
});

export default tseslint.config(
  js.configs.recommended,
  ...compat.extends("airbnb"),
  ...compat.extends("airbnb-typescript"),
  ...compat.extends("next/core-web-vitals"),
  ...tseslint.configs.recommendedTypeChecked,
  ...tailwind.configs["flat/recommended"],
  eslintConfigPrettier,
  {
    plugins: {
      "react-hooks": reactHooks,
      unicorn,
      "simple-import-sort": simpleImportSort
    }
  },
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals.browser
      },
      parserOptions: {
        project: true,
        tsconfigRootDir: import.meta.dirname
      }
    }
  },
  {
    ...reactPlugin.configs.flat.recommended,
    settings: {
      react: {
        version: "detect"
      }
    },
    files: ["**/*.{js,jsx,ts,tsx,cjs,mjs}"],
    extends: [tseslint.configs.disableTypeChecked]
  },
  {
    ignores: [
      "tailwind.config.js",
      "commitlint.config.mjs",
      "eslint.config.mjs",
      "src/components/ui/**",
      ".next/**"
    ]
  },
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      ...reactHooks.configs.recommended.rules,
      "@typescript-eslint/lines-between-class-members": "off",
      "@typescript-eslint/no-throw-literal": "off",
      "import/extensions": [
        "error",
        "ignorePackages",
        {
          "": "never",
          js: "never",
          jsx: "never",
          ts: "never",
          tsx: "never"
        }
      ],
      "import/prefer-default-export": "off",
      "import/no-extraneous-dependencies": "off",
      "react/jsx-props-no-spreading": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "react-hooks/exhaustive-deps": "off"
    }
  }
);
