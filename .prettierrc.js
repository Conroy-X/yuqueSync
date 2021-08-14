const { prettier } = require('@umijs/fabric');

module.exports = {
  ...prettier,
  arrowParens: 'avoid',
  trailingComma: 'es5',
  quoteProps: 'as-needed',
};
