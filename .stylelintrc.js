module.exports = {
  extends: '@mate-academy/stylelint-config',
  plugins: ['stylelint-scss'],
  rules: {},
  overrides: [
    {
      files: ['**/*.css'],
      rules: {
        'rule-empty-line-before': null,
      },
    },
  ],
};
