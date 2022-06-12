module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        'plugin:@next/next/recommended',
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": { 
        // suppress errors for missing 'import React' in files
       "react/react-in-jsx-scope": "off",
        // allow jsx syntax in js files (for next.js project)
       "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], //should add ".ts" if typescript project
       "react/no-unescaped-entities": "off",
       "@next/next/no-page-custom-font": "off"
    }
}
