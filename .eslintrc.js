module.exports = {
  extends: [
    "plugin:react/recommended",
    "plugin:prettier/recommended",
    "prettier/react",
  ],
  parser: "babel-eslint",
  env: {
    browser: true,
  },
  rules: {
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    // "comma-dangle": ["warn", "never"],
    "prefer-template": 1,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": [
      "error",
      {
        html: "ignore",
        custom: "ignore",
        exceptions: [""],
      },
    ],
  },
  plugins: ["prettier", "react"],
};
