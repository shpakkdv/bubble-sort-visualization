module.exports = {
  root: true,
  extends: [
    "airbnb-typescript",
    "airbnb/hooks",
  ],
  plugins: [
    "import",
    "@typescript-eslint/eslint-plugin",
    "react-hooks",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    }
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
      },
    }
  },
  env: {
    jest: true,
  },
  rules: {
    "@typescript-eslint/member-delimiter-style": ["error", {
      multiline: {
          requireLast: true,
          delimiter: "semi",
      },
      singleline: {
          requireLast: true,
          delimiter: "semi",
      },
    }],
    "@typescript-eslint/no-unused-expressions": ["error", {
      allowShortCircuit: true,
      allowTernary: false,
      allowTaggedTemplates: false,
      enforceForJSX: true, // this check is absent in airbnb
    }],
    "@typescript-eslint/no-shadow": "warn",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/type-annotation-spacing": ["error"],

    "react/button-has-type": "off",
    "react/prop-types": "off",

    "jsx-a11y/label-has-associated-control": "off",
    "react/jsx-curly-newline": "off",

    "import/no-extraneous-dependencies": "off",

    "arrow-parens": "off",
    "consistent-return": "off",
    "guard-for-in": "off",
    "import/prefer-default-export": "off",
    "max-len": ["error", { "code": 150, "tabWidth": 2 }],
    "no-alert": "off",
    "no-await-in-loop": "off",
    "no-confusing-arrow": "off",
    "no-console": "off",
    "no-continue": "off",
    "no-param-reassign": ["error", { props: false }],
    "no-plusplus": "off",
    "no-restricted-globals": "off",
    "no-restricted-syntax": "off",
    "object-curly-newline": ["error", {
      ObjectExpression: { multiline: true, consistent: true },
      ObjectPattern: { multiline: true, consistent: true },
      ImportDeclaration: { multiline: true, consistent: true },
      ExportDeclaration: { multiline: true, consistent: true },
    }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: ['./tsconfig.json'],
      },
    }
  ],
};
