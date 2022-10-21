module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "eslint:recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      modules: true,
    },
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
  },
};
