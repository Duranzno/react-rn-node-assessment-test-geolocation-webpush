module.exports = {
    root: true,
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "plugins": [
        "@typescript-eslint",
        "prettier",
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
        "sourceType": 'module', // Allows for the use of imports
    },
    "parser": "@typescript-eslint/parser",
    "rules": {
        "semi": "off",
        "@typescript-eslint/no-unused-vars": [
            1,
            {
                "args": "none"
            }
        ]
    }
}