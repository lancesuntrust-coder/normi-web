import { defineConfig, globalIgnores } from "eslint/config";
import pluginImport from "eslint-plugin-import";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    files: ["src/**/*.{ts,tsx}"],
    plugins: {
      import: pluginImport,
    },
    settings: {
      // Resolve aliases like '@/...' via TS config
      "import/resolver": {
        typescript: {
          alwaysTryTypes: true,
          project: "./tsconfig.json",
        },
      },
    },
    rules: {
      // Prefer alias imports over relative component barrels
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            { group: ["../*", "../../*", "../../../*"], message: "Use alias imports '@/...' instead of parent relative imports." },
            { group: ["../components", "../../components"], message: "Import canonical components via '@/components/...', not relative barrels." },
          ],
        },
      ],
      // Optional: maintain import order consistency
      "import/order": [
        "warn",
        {
          groups: ["builtin", "external", "internal", "parent", "sibling", "index", "object"],
          pathGroups: [{ pattern: "@/**", group: "internal", position: "before" }],
          pathGroupsExcludedImportTypes: ["builtin"],
          alphabetize: { order: "asc", caseInsensitive: true },
          "newlines-between": "always",
        },
      ],
      // Disallow raw hex colors and rgba strings in TS/TSX literals
      "no-restricted-syntax": [
        "error",
        {
          selector: "Literal[value=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/]",
          message: "Use CSS variables (tokens) like 'var(--text)' instead of raw hex colors.",
        },
        {
          selector: "Literal[value=/^rgba?\\(.+\\)$/]",
          message: "Use CSS variables (tokens) like 'var(--glass)' instead of raw rgba/rgba strings.",
        },
        // Tailwind-in-TSX is enforced via Husky pre-commit to avoid false positives in ESLint selectors
      ],
    },
  },
]);

export default eslintConfig;
