# JSConfig

This repo provides a set of npm packages that configure the awesome tooling we use every day. When you have too many standards, xkcd recommends to create a new standard ([Source](https://xkcd.com/927/)).

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

TODO

## Decisions process :hocho:

TODO
