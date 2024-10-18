import globals from "globals";

export default [
  {languageOptions: { globals: globals.node }},
  {files: ["test/page.test.js"], languageOptions: { globals: globals.browser }},
];