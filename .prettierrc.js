module.exports = {
  arrowParens: "avoid",
  bracketSpacing: true,
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 120,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: false,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 120,
      },
    },
  ],
};
