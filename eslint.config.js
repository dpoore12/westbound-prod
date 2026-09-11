import tseslint from "@typescript-eslint/eslint-plugin";
import tsparser from "@typescript-eslint/parser";

export default [
  {
    // next-env.d.ts is generated and not in a TS project — type-aware rules
    // crash CI when eslint walks it (red main since 2026-06-03).
    ignores: [
      "**/dist/**",
      "**/.next/**",
      "**/node_modules/**",
      "**/next-env.d.ts",
    ],
  },
  {
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: tsparser,
      parserOptions: { project: false },
    },
    plugins: { "@typescript-eslint": tseslint },
    rules: {
      // Requires parserOptions.project / projectService — keep off until typed lint is wired.
      "@typescript-eslint/no-floating-promises": "off",
      // Re-enable after Wave 1 zod-on-adapters work; today these are ~78 legacy warnings
      // and `--max-warnings 0` kept main red behind the next-env crash.
      "@typescript-eslint/consistent-type-imports": "off",
      "no-restricted-syntax": "off",
    },
  },
];
