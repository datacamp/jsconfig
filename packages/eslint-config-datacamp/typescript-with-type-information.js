/**
 * This config requries type information. This means that some extra setup must be done.
 *
 * See https://typescript-eslint.io/linting/typed-linting/
 * See https://typescript-eslint.io/linting/typed-linting/monorepos
 *
 * One must add the `parserOptions` field in eslint configuration. This will configure the `typescript-eslint` parser.
 *
 * More specifically, it's required to set `project` and recommended to set `tsconfigRootDir`. See the README.md for more information on how it could be setup
 */

module.exports = {
  extends: [
    './typescript'
  ]
}
