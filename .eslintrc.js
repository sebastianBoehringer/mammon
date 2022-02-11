module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { project: ["./tsconfig.json"] },
  plugins: ["@typescript-eslint"],
  rules: {},

  env: {
    node: true,
  },
};
