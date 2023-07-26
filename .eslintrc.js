module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/vue3-essential', '@vue/airbnb', '@vue/typescript/recommended'],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vuejs-accessibility/form-control-has-label': 'off',
    'import/prefer-default-export': 'off',
    'vue/multi-word-component-names': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-spaced-func': 'off',
    'func-call-spacing': 'off',
    'object-curly-newline': 'off',
  },
};
