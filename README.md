# JSConfig

This repo provides a set of npm packages that configure the awesome tooling we use every day. There are a lot of these standards out there, but as a company we have specific needs, so this is here to serve us in the best way.

Also, when you have too many standards, xkcd recommends to create a new standard ([Source](https://xkcd.com/927/)).

## Installation :floppy_disk:

(If you are using npm, you should use `npm install` instead of `yarn add`)

### ESlint :wrench:

```bash
yarn add -D eslint @datacamp/eslint-config
```

Create a file `.eslintrc.js` with the following contents

```js
// .eslintrc.js
module.exports = {
  extends: ['@datacamp/eslint-config'],
};
```

For typescript projects you can use the following config:

```js
// .eslintrc.js
module.exports = {
  extends: ['@datacamp/eslint-config/typescript'],
};
```

Afterwards you can run eslint as follows:

```bash
yarn eslint .
```

It's recommended to:

- also install our common prettier config (as ESlint config uses your prettier config to lint for code style)
- install an eslint plugin for your editor of choice (to see errors / warnings in your editor)

### Prettier :nail_care:

```bash
yarn add prettier @datacamp/prettier-config
```

Create a file `prettier.config.js` with the following contents

```js
// prettier.config.js
module.exports = {
  ...require('@datacamp/prettier-config'),
};
```

It's recommended to:

- also install eslint to check whether your files are following your prettier config.
- install prettier plugin for your editor of choice

## Contribute :family:

### Developer guide

All the configs are in the `packages/` directory. We use [lerna](https://github.com/lerna/lerna) to manage dependencies.

Install the dependencies for all the subpackages using `yarn` in the root of the project.

If you need help, ping the #javascript channel on Slack.

### Decisions process :hocho:

1. Create a PR (or issue if the PR would be a lot of work) outlying the changes + why it's a good idea
2. Communicate proposal in #javascript
3. On the next javascript guild meeting, we go over all open PRs and quickly discuss as a group on whether we think it's a good idea. (In the mean time, feel free to extend the common configuration in your own project already!)

### Publishing

You can publish all the packages you've edited using `lerna publish`:

```bash
yarn lerna publish
```

## Example Projects using JSConfig

- [teach-data-api](https://github.com/datacamp-engineering/teach-data-api)
