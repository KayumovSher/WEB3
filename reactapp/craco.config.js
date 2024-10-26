// craco.config.js
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  // other configurations...
  plugins: [
    {
      plugin: ESLintPlugin,
      options: {
        extensions: ['js', 'jsx', 'ts', 'tsx'], // Include any other file types you want to lint
      },
    },
  ],
};