module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/vue3-recommended",
    "prettier",
  ],
  parser: "vue-eslint-parser",
  parserOptions: { 
    parser: "@typescript-eslint/parser",
    project: ["./tsconfig.json"],
    extraFileExtensions: [".vue"] 
  },
  plugins: ["@typescript-eslint", "vue"],
  rules: {},

  env: {
    node: true,
    "vue/setup-compiler-macros": true,
  },
};
