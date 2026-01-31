// // .prettierrc
// {
//   "plugins": ["prettier-plugin-tailwindcss"],
// }

/** @type {import("prettier").Config} */
export default {
  // Core formatting
  semi: true,
  singleQuote: true,
  trailingComma: 'es5',
  printWidth: 50,
  tabWidth: 2,
  useTabs: false,
  bracketSpacing: true,
  arrowParens: 'always',

  // JSX / React
  jsxSingleQuote: false,
  jsxBracketSameLine: false,

  // Tailwind CSS class sorting
  plugins: ['prettier-plugin-tailwindcss'],

  // Helps Tailwind plugin detect class usage in frameworks
  tailwindFunctions: ['clsx', 'cn', 'cva'],
};
