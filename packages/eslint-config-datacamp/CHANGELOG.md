# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [4.2.0](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@4.1.0...@datacamp/eslint-config@4.2.0) (2021-02-08)


### Bug Fixes

* use @typrscript-eslint/no-use-before-define instead of default ([8adf7a4](https://github.com/datacamp-engineering/jsconfig/commit/8adf7a4f66fe3c854d261ea7371033ebacecf9a3))


### Features

* allow config files to contain dev dependencies ([d3adbe2](https://github.com/datacamp-engineering/jsconfig/commit/d3adbe24ff33fd22325c42a6ff558ad03269f575))
* only allow //ts-expect-error and require a description why added ([f8bc416](https://github.com/datacamp-engineering/jsconfig/commit/f8bc416e0dad7b45f4a27cf3d59457203715daf9))
* turn off @typescript-eslint/no-empty-function in tests ([98464f0](https://github.com/datacamp-engineering/jsconfig/commit/98464f020fd1a2fd2e81e8a3c4651f9264285102))
* turn off class-methods-use-this ([3d7fb98](https://github.com/datacamp-engineering/jsconfig/commit/3d7fb98832e9a8e81ea805f778f29cbf9e64edd4))
* turn off import/prefer-default-export ([42ba9f7](https://github.com/datacamp-engineering/jsconfig/commit/42ba9f7ef22a1f37f0f879ebd44ade3fa6c5cd0d))
* turn off max-classes-per-file ([a8fe9c6](https://github.com/datacamp-engineering/jsconfig/commit/a8fe9c69a148ce862eb27c935a73df2bb8b7cc98))
* turn off no-useless-constructor ([e76c53b](https://github.com/datacamp-engineering/jsconfig/commit/e76c53b225bc91fd7a4bec57c65c1d006fc401a5))
* turn off sonarjs/no-duplicate-string ([a9b4e73](https://github.com/datacamp-engineering/jsconfig/commit/a9b4e7333fd6a6cdd7e7f908312a98b7eee59fc9))
* turn off sonarjs/prefer-immediate-return ([dba6036](https://github.com/datacamp-engineering/jsconfig/commit/dba6036ffd81dfccef482dcf387774739136e3e2))





# [4.1.0](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@4.0.0...@datacamp/eslint-config@4.1.0) (2020-09-18)


### Features

* **eslint:** sort destructuring keys ([861a5b4](https://github.com/datacamp-engineering/jsconfig/commit/861a5b4))





# [4.0.0](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@3.1.1...@datacamp/eslint-config@4.0.0) (2020-08-27)


### Features

* **eslint:** no anonymous default Export ([66fb4ae](https://github.com/datacamp-engineering/jsconfig/commit/66fb4ae))


### BREAKING CHANGES

* **eslint:** no anonymous default export





## [3.1.1](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@3.1.0...@datacamp/eslint-config@3.1.1) (2020-08-18)


### Bug Fixes

* **eslint:** fix array-type config ([e14c376](https://github.com/datacamp-engineering/jsconfig/commit/e14c376))





# [3.1.0](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@3.0.0...@datacamp/eslint-config@3.1.0) (2020-08-13)


### Features

* **eslint:** add array-type rule ([4bdac88](https://github.com/datacamp-engineering/jsconfig/commit/4bdac88))





# [3.0.0](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@2.0.0...@datacamp/eslint-config@3.0.0) (2020-08-06)


### Features

* add sonar-lint ([23b18ec](https://github.com/datacamp-engineering/jsconfig/commit/23b18ec))


### BREAKING CHANGES

* Add sonar-lint rules and not all of them are autofixable





# [2.0.0](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@1.3.0...@datacamp/eslint-config@2.0.0) (2020-08-03)


### Features

* add eslint-plugin-comments ([704bd0d](https://github.com/datacamp-engineering/jsconfig/commit/704bd0d))


### BREAKING CHANGES

* there is no autofix for this rule, so it requires manual intervention





# [1.3.0](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@1.2.0...@datacamp/eslint-config@1.3.0) (2020-07-30)


### Features

* adds repository info to package.json files ([5a28357](https://github.com/datacamp-engineering/jsconfig/commit/5a28357))





# [1.2.0](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@1.1.0...@datacamp/eslint-config@1.2.0) (2020-07-29)


### Bug Fixes

* set no-explicit-any to off for test files ([9278582](https://github.com/datacamp-engineering/jsconfig/commit/9278582))


### Features

* **eslintrc:** allow ts-ignore in tests ([da5a15a](https://github.com/datacamp-engineering/jsconfig/commit/da5a15a))





# [1.1.0](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@1.0.1...@datacamp/eslint-config@1.1.0) (2020-04-01)


### Features

* allow typescript imports without extensions ([c6e3444](https://github.com/datacamp-engineering/jsconfig/commit/c6e3444))
* don't require return types in js files ([bd6887a](https://github.com/datacamp-engineering/jsconfig/commit/bd6887a))





## [1.0.1](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@1.0.0...@datacamp/eslint-config@1.0.1) (2020-02-14)


### Bug Fixes

* fix typo ([747c120](https://github.com/datacamp-engineering/jsconfig/commit/747c120))





# [1.0.0](https://github.com/datacamp-engineering/jsconfig/compare/@datacamp/eslint-config@0.1.0...@datacamp/eslint-config@1.0.0) (2020-02-14)


### Features

* sort properties case insensitive ([#73](https://github.com/datacamp-engineering/jsconfig/issues/73)) ([6bb707f](https://github.com/datacamp-engineering/jsconfig/commit/6bb707f))


### BREAKING CHANGES

* Sorting of keys and enums is no longer case sensitive.





# 0.1.0 (2020-02-13)


### Bug Fixes

* Add homepage to package.json ([#51](https://github.com/datacamp-engineering/jsconfig/issues/51)) ([04fd7fd](https://github.com/datacamp-engineering/jsconfig/commit/04fd7fd))


### Features

* Sort imports ([#19](https://github.com/datacamp-engineering/jsconfig/issues/19)) ([a02bbc4](https://github.com/datacamp-engineering/jsconfig/commit/a02bbc4))
