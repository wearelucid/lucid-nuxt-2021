# lucid-nuxt-2021

## Prerequisites

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- .env file (`cp .env.example .env`)
- Optional: It's recommended to use [VS Code](#VS-Code)
- If you use a GUI app for Git (Sourcetree), add a [`~/.huskyrc`](#use-with-gui-git-clients-ie-sourcetree) file

## First Things First

- Delete the [`/_nuxt-content-module-demo`](./_nuxt-content-module-demo) directory if you don't need it
- Go through [`nuxt.config.js`](./nuxt.config.js)
  - Remove i18n if you don't need it
- Update your [`package.json`](./package.json)'s **name** and **description** properties. This info will end up in `manifest.json` created by [`@nuxtjs/pwa`'s manifest module](https://pwa.nuxtjs.org/manifest).
- Add your Github username to [`dependabot.yml`](./.github/dependabot.yml)

## Build Setup

```bash
# use specified node version
$ nvm use

# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Storybook

Added via [@nuxtjs/storybook](https://storybook.nuxtjs.org). Make sure to have a look at [`storybookConfig.js`](./configs/storybookConfig.js).

Run Storybook:

```bash
# Run Storybook on http://localhost:4000
$ yarn storybook
```

## Linting tools

- [ESLint](https://github.com/nuxt/eslint-config)
- [Prettier](https://github.com/prettier/prettier)
- [StyleLint](https://github.com/stylelint/stylelint)
- [Lint staged files](https://github.com/okonet/lint-staged)
- [Commitlint](https://github.com/conventional-changelog/commitlint) with [Conventional Commits](https://www.conventionalcommits.org/en) (@commitlint/config-conventional)
  - Allowed types: `[build, chore, ci, docs, feat, fix, perf, refactor, revert, style, test]`
  - Run `$ yarn commit` to commit with [commitizen cli](https://github.com/commitizen/cz-cli) using [cz-conventional-changelog](https://github.com/commitizen/cz-conventional-changelog)

### Use with GUI Git Clients (i.e. Sourcetree)

In order to [run husky v4+ with Sourcetree](https://typicode.github.io/husky/#/?id=command-not-found) one can add a `~/.huskyrc` file.

```bash
# ~/.huskyrc
# This loads nvm.sh and sets the correct PATH before running hook
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
```

## SASS Architecture

This boilerplate is following the [SASS 7-1 pattern](https://sass-guidelin.es/#the-7-1-pattern).

The architecture consists of:

- Abstracts: Tools, helpers, functions and mixins
- Base: Base styles
- Pages: Specific styles for pages
- Vendors: External libraries

Note: Not all seven folders of the SASS 7-1 pattern have yet been setup. This is because folders such as `/themes` are very project specific.

### Breakpoints / Media Queries

Add breakpoints to [`breakpoints.mjs`](./configs/breakpoints.mjs). Breakpoints are available in SASS, [Storybook](./configs/storybookConfig.js) and [@nuxt/image](./configs/nuxtImageConfig.js).

#### [`sass-mq`](https://github.com/sass-mq/sass-mq) Mixin Usage

```scss
@include mq($from: medium) {
  .titanic {
    float: none;
  }
}
```

## VS Code

We recommend to use [VS Code](https://code.visualstudio.com/). [Recommended extensions](./.vscode/extensions.json) can be installed (prompt by VS Code) when opening the project for the first time. [Project settings](./.vscode/settings.json) ensures that linting with [`eslint`](./.eslintrc.js) and [`stylelint`](./.stylelintrc.json) works correctly.
