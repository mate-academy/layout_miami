module.exports = {
  extends: '@mate-academy/stylelint-config',
  plugins: ['stylelint-scss'],
  rules: {},
  overrides: [
    {
      files: ['**/styles.css'],
      rules: {
        'rule-empty-line-before': null,
      },
    },
  ],
};
