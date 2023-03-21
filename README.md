# JSConfig

This repo provides a set of npm packages that configure the awesome tooling we use every day. There are a lot of these standards out there, but as a company we have specific needs, so this is here to serve us in the best way.

Also, when you have too many standards, xkcd recommends to create a new standard ([Source](https://xkcd.com/927/)).

## Vision

By having a vision, we can make some decisions more easily by refering back to this vision and how a change contributes to this vision.

The goal of JS Config is to improve the productivity of our developers (in the long term). This means we should strive for (in order of importance):

1. _Consistency_: auto-formatting / auto-sorting stuff: Developers should not need to think about this stuff and still find their code in a readable and consistent order / syntax. There shouldn't be a lot of discussion about which style to pick as it's just a matter of taste and getting used too. Let's try to stay as close as possible to "community standards".
1. _Correctness_: small bugs (e.g. eslint rules about hooks) should be catched by eslint not by (human) reviews. Rules that catch potential bugs and with few false positives should be enabled.
1. _Code Quality_: Rules that help in code quality and are not flagging too many false positives could be enabled as well.
1. _Unity_: Having as many configs as possible in this repo and use it in as many projects as possible with at little adaptation as possible (but adaptation is still allowed!). That way engineers can assume a good and working setup and don’t need to catch little bugs during review time if a linter can do this.

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

Or even better if you also want to enable a bunch of rules for which type-information is needed

```js
// .eslintrc.js
module.exports = {
  extends: ['@datacamp/eslint-config/typescript-with-type-information'],
  parserOptions: {
    project: path.join(__dirname, './tsconfig.eslint.json'),
    tsconfigRootDir: __dirname,
  }
};

// tsconfig.eslint.json
{
  "exclude": ["node_modules", "**/node_modules", "**/dist"],
  "extends": "./tsconfig.json", // Make sure to let this point to your local tsconfig.json
  "include": ["**/*", ".eslintrc.js"]
}
```

Feel free to configure the `parserOptions` differently. But this setup should hopefully work for most repositories. There is more documentation available ([[1](https://typescript-eslint.io/linting/typed-linting/)], [[2](https://typescript-eslint.io/linting/typed-linting/monorepos)] & [[3](https://typescript-eslint.io/architecture/parser/#project)])

For front-end projects, you might want to adjust the environment:

```js
// .eslintrc.js
module.exports = {
  // [...]
  env: {
    browser: true,
  },
};
```

Afterwards you can run eslint as follows:

```bash
yarn eslint . --ext ts,tsx,js,json --ignore-path .gitignore
```

It's recommended to:

- also install our common prettier config (as ESlint config uses your prettier config to lint for code style)
- install an eslint plugin for your editor of choice (to see errors / warnings in your editor)

### Prettier :nail_care:

```bash
yarn add -D prettier @datacamp/prettier-config
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

### NestJS :lion:

For DI to properly consume Reflect metadata add to your `.eslintrc.js` file:
```
parserOptions: {
  emitDecoratorMetadata: true,
}
```

It causes TypeScript to create references to value imports when they are used in a type-only location.

More context [here](https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/consistent-type-imports.md#usage-with-emitdecoratormetadata)

## Contribute :family:

### Developer guide

All the configs are in the `packages/` directory. We use [lerna](https://github.com/lerna/lerna) to manage dependencies.

Install the dependencies for all the subpackages using `yarn` in the root of the project.

If you need help, ping the #javascript channel on Slack.

### Decisions process :hocho:

1. Try out the configuration in your own project for a while (so the cost / benefit trade-off becomes more apparent)
1. Create a PR (or an issue with a proposal if the PR would be a lot of work) outlying the changes + why it's a good idea. You can refer to the vision on what level it improves developer productivity (Consistency, Correctness, Code Quality, Unity).
1. Communicate proposal in #javascript channel on Slack
1. On the next javascript guild meeting, we go over all open PRs and quickly discuss as a group on whether we think it's a good idea. For this, we base ourselves on the vision. A change that fits the vision well has a higher chance of getting merged.

### Commit messages

We use [commitlint]() to lint our commit messages and follow [config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/%40commitlint/config-conventional#type-enum). The version of the packages will be bumped based on the commit messages as well, see [the conventional commits website](https://www.conventionalcommits.org/en/v1.0.0/) for more information (short version: fix=patch, feat=minor, BREAKING CHANGE footer=major)

It's hard to know what is a breaking change so these our the guidelines:

- It's a breaking change if it adds new errors that are not auto-fixable. So after running eslint --fix you should be good again and you just need to review the things it fixed
- It's a breaking change if it expects to change a lot of code on --fix E.g. object literal properties should be ordered (it's auto fixable but it's gonna mess up a lot of code). Most prettier changes will also fall under this

So in short, users should be able to run `eslint --fix` (or equivalent) and review a few things but it should be doable to review in <10 minutes, even for large projects.
Other changes could qualify as well but then we basically always have major changes and almost never minor so that's why we choose these guidelines (for now). We're open to change them if they don't work for us.

### Publishing

You can publish all the packages you've edited. This will run `lerna publish` under the hood:

```bash
yarn release
```

This will propose version numbers for you and push a commit with a changelog to all the individual packages.

_Please only run this from main and make sure to pull the latest main before you run it._ Running it will push a commit to main which the updated changelog etc.

## Example Projects using JSConfig

- [DataCamp's Design System](https://github.com/datacamp/design-system)
