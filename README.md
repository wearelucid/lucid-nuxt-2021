# lucid-nuxt-2021

## Prerequisites

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- .env file (`cp .env.example .env`)
- Optional: It's recommended to use [VS Code](#VS-Code)

## First Things First

- Delete the [`/_nuxt-content-module-demo`](./_nuxt-content-module-demo) directory if you don't need it
- Go through [`nuxt.config.js`](./nuxt.config.js)
  - Remove i18n if you don't need it
- Update your [`package.json`](./package.json)'s **name** and **description** properties. This info will end up in `manifest.json` created by [`@nuxtjs/pwa`'s manifest module](https://pwa.nuxtjs.org/manifest).

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
- [Commitlint](https://github.com/conventional-changelog/commitlint)
  - Using [Conventional Commits](https://www.conventionalcommits.org/en) (@commitlint/config-conventional)

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
- Base: Holds what we might call the boilerplate code for the project, such as colors and typography declarations
- Pages: Specific styles for pages
- Vendors: External libraries

Files which are declaring variables or global helpers/mixins, are being imported and summarized inside [`style-resources.scss`](./assets/scss/style-resources.scss).

Note: Not all seven folders of the SASS 7-1 pattern have yet been setup. This is because folders such as `/themes` are very project specific.

### Adding new _shared_ or _global_ files

Before adding any new file, make sure to check out [this guide](https://sass-guidelin.es/#the-7-1-pattern) to declare in which folder the new file belongs – or if you need to create a new folder.

Once the file is placed correctly, an import to that file needs to be set:

- If your file declares variables or mixins, import it inside the [`style-resources.scss`](./assets/scss/style-resources.scss).
- If you declare _actual styles,_ import them in [`global.scss`](./assets/scss/global.scss).

### Nuxt Style Resources

This boilerplate uses [@nuxtjs/style-resources](https://github.com/nuxt-community/style-resources-module).

### Breakpoints / Media Queries

Add breakpoints to [`breakpoints.json`](./configs/breakpoints.json). Breakpoints are available in [Storybook](./configs/storybookConfig.js).

#### [`sass-mq`](https://github.com/sass-mq/sass-mq) Mixin Usage

```scss
@include mq($from: medium) {
  .titanic {
    float: none;
  }
}
```

#### Debug `sass-mq` breakpoints

Display the currently active breakpoint in the top right corner:

```scss
$s-debug-breakpoints: true;
```

## VS Code

We recommend to use [VS Code](https://code.visualstudio.com/). [Recommended extensions](./.vscode/extensions.json) can be installed (prompt by VS Code) when opening the project for the first time. [Project settings](./.vscode/settings.json) ensures that linting with [`eslint`](./.eslintrc.js) and [`stylelint`](./.stylelintrc.json) works correctly.
