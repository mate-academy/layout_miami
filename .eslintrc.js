module.exports = {
  extends: '@mate-academy/eslint-config',
};

module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error',
  },
};
