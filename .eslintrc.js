module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:jsx-a11y/recommended',
    'plugin:react-hooks/recommended',
  ],
  parser: 'babel-eslint',
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  plugins: ['prettier', 'react', 'jsx-a11y'],
};
