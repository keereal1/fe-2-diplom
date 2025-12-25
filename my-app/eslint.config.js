// {
//     "extends": ["eslint:recommended", "plugin:react/recommended"]
//   }

// {
//   "plugins": [
//       "react"
//     ],
//     "extends": ["eslint:all", "plugin:react/all"]
// }

// {
//   "extends": ["react-app", "plugin:jsx-a11y/recommended"],
//   "plugins": ["jsx-a11y"]
// }

const react = require('eslint-plugin-react');
const globals = require('globals');

module.exports = [
  {
    files: ['**/*.{js,jsx,mjs,cjs,ts,tsx}'],
    plugins: {
      react,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
      },
    },
    rules: {
      // ... any rules you want
      'react/jsx-uses-react': 'error',
      'react/jsx-uses-vars': 'error',
     },
    // ... others are omitted for brevity
  },
];