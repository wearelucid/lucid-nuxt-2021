# lucid-nuxt-2021

## Prerequisites

- [Node Version Manager](https://github.com/nvm-sh/nvm)
- .env file (`cp .env.example .env`)

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

## VS Code

We recommend using VS Code. [Recommended extensions](./.vscode/extensions.json) can be installed (prompt by VS Code) when opening the project. [Project settings](./.vscode/settings.json) ensure that linting with [`eslint`](./.eslintrc.js) and [`stylelint`](./.stylelintrc.json) works correctly.
