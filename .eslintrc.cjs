/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/standard'
    // 'eslint:recommended', // use @vue/standard instead
    // '@vue/eslint-config-prettier/skip-formatting' // using @vue/standard instead
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
