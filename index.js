module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'prettier',
    'prettier/flowtype',
    'prettier/react',
  ],
  plugins: [
    'react',
    'jsx-a11y',
    'import',
    'flowtype',
    'prettier'
  ],
  rules: {
    "no-console": [
      "warn",
      {
        "allow": [
          "warn",
          "error"
        ] 
      }
    ], 
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        bracketSpacing: true,
        jsxBracketSameLine: true,
        parser: 'flow',
        tabWidth: 2,
      },
    ],
    'block-scoped-var': 'warn',
    camelcase: 'warn',
    curly: ['error', 'all'],
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  env: {
    es6: true,
    node: true,
  },
};