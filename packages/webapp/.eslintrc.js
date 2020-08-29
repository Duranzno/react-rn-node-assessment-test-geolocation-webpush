module.exports = {
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": [
    "../../.eslintrc.js",
    "plugin:react/recommended",
  ],

  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
  },
  "plugins": [
    "react",
    "@typescript-eslint"
  ],
  "rules": {
    "react/prop-types": "off",

  }
}