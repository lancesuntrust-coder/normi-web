import { defineConfig, globalIgnores } from "eslint/config";
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
    rules: {
      // Prefer alias imports over relative component barrels
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            {
              group: ["../components", "../../components"],
              message:
                "Import canonical components via '@/components/...', not relative barrels.",
            },
          ],
        },
      ],
      // Disallow raw hex colors (e.g., #fff, #ffffff) in TS/TSX literals
      "no-restricted-syntax": [
        "error",
        {
          selector:
            "Literal[value=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/]",
          message:
            "Use CSS variables (tokens) like 'var(--text)' instead of raw hex colors.",
        },
        {
          selector:
            "Literal[value=/^rgba?\\(.+\\)$/]",
          message:
            "Use CSS variables (tokens) like 'var(--glass)' instead of raw rgba/rgba strings.",
        },
      ],
    },
  },
]);

export default eslintConfig;
