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

## VS Code

We recommend using VS Code. [Rrecommended extensions](./.vscode/extensions.json) can be installed (prompt by VS Code) when opening the project. [Project settings](./.vscode/settings.json) ensure that linting with [`eslint`](./.eslintrc.js) and [`stylelint`](./.stylelintrc.json) works correctly.
