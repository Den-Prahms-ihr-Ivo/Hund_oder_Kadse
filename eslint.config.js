// eslint.config.js  (ESM / flat config)
import tseslint from "typescript-eslint";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended, // base rules
  // Use type-aware rules only if you need them:
  // ...tseslint.configs.recommendedTypeChecked,

  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: ["./apps/api/tsconfig.json", "./apps/web/tsconfig.json"], // or multiple entries
        tsconfigRootDir: new URL(".", import.meta.url), // equivalent to __dirname
      },
    },
  },
];
