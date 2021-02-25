module.exports = {
  extends: ['stylelint-config-sass-guidelines', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'max-nesting-depth': 3,
    'selector-no-qualifying-type': [
      true,
      {
        ignore: ['attribute'],
      },
    ],
  },
}
