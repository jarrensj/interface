module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    curly: 'off',
    'no-eval': 'error',
    'no-extra-boolean-cast': 'error',
    'no-ex-assign': 'error',
    'no-console': 'warn',
    semi: 'off',
    // TODO consider enabling these:
    // 'import/no-self-import': 2,
    // 'import/no-duplicates': 2,
    // 'import/no-default-export': 1,
    // '@typescript-eslint/no-floating-promises': 2,
    // '@typescript-eslint/explicit-function-return-type': 0,
    // '@typescript-eslint/member-delimiter-style': 0,
    // '@typescript-eslint/no-explicit-any': 0,
    // '@typescript-eslint/ban-ts-ignore': 0,
    // '@typescript-eslint/ban-ts-comment': 0,
    // '@typescript-eslint/explicit-module-boundary-types': 0,
    // '@typescript-eslint/no-require-imports': 1,
    // '@typescript-eslint/no-non-null-assertion': 0,
    // 'react/jsx-uses-react': 'off',
    // 'react/react-in-jsx-scope': 'off',
  },
}
