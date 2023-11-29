module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier",
    "plugin:prettier/recommended",
    "plugin:react-hooks/recommended",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["prettier", "react", "@typescript-eslint", "react-hooks"],
  rules: {
    // 일반 규칙
    "no-nested-ternary": "off",
    "no-use-before-define": "warn",

    // 리액트 규칙
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unknown-property": "off",
    "react/jsx-filename-extension": ["warn", { extensions: [".js", ".jsx", ".ts", ".tsx"] }],

    // 리액트 훅스 규칙
    "react-hooks/exhaustive-deps": "off",

    // jsx 규칙 (웹 접근성)
    "jsx-a11y/click-events-have-key-events": "off",
    "jsx-a11y/interactive-supports-focus": "off",
    "jsx-a11y/label-has-associated-control": ["off", { labelAttributes: ["htmlFor"] }],
    "jsx-a11y/no-noninteractive-element-interactions": "off",

    // 타입스크립트 규칙
    "@typescript-eslint/no-explicit-any": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-var-requires": "off",

    // import 규칙
    "import/newline-after-import": ["error"],
    "import/no-extraneous-dependencies": "off",
    "import/no-unresolved": "off",
    "import/order": [
      "error",
      {
        groups: ["builtin", "external", "internal", ["parent", "sibling"], "index", "type"],
        pathGroups: [
          {
            pattern: "react",
            group: "builtin",
            position: "before",
          },
          {
            pattern: "@emotion/*",
            group: "external",
            position: "after",
          },
        ],
        pathGroupsExcludedImportTypes: ["react"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],
  },
};
