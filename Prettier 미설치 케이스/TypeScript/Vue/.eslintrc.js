module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    // 'eslint:recommended',
    '@vue/typescript/recommended',
    'flitto-typescript',
    'Prettier',
  ],
  ignorePatterns: ['.eslintrc.js'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: ['./tsconfig.json'],
    ecmaVersion: 2020,
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 80,
        bracketSpacing: true,
        arrowParens: 'always',
      },
    ],
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    '@typescript-eslint/naming-convention': 'off',
    '@typescript-eslint/dot-notation': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
