const options = {
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true
  },
  extends: "eslint:recommended",
  rules: {
    "complexity": ["warn"],
    "no-debugger": 2,
    "no-console": [
      2,
      {
        allow: ["warn", "error"]
      }
    ],
    "eqeqeq": 2,
    "no-eval": 2,
    "no-caller": 2,
    "no-shadow": 2,
    "no-new-func": 0,
    "no-new-wrappers": 0,
    "no-undef": 2,
    "no-empty": 2,
    "no-new": 2,
    "no-useless-escape": 0,
    "block-spacing": 2,
    "indent": [
      "error",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": 2,
        "MemberExpression": "off",
        "CallExpression": {
          arguments: "off"
        }
      }
    ],
    "no-multi-str": 2,
    "semi": 2,
    "arrow-spacing": 2
  }
};
  
module.exports = options;