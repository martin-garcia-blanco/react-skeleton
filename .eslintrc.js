module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  plugins: ['prettier', 'react'],
};
