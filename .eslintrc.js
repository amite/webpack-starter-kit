module.exports = {
  extends: 'airbnb',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
  },
  rules: {
    'no-console': 0,
    semi: 0,
    'react/jsx-filename-extension': 0,
    'arrow-body-style': 0,
  },
}
