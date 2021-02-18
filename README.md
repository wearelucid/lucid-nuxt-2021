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

The archtecture consists of:

- Abstracts: Tools, helpers, functions and mixins.
- Base: Holds what we might call the boilerplate code for the project, such as colors and typography delcarations.
- Pages: Specific styles for pages.
- Vendors: External libraries.

Files which are declaring varibales or global helpers/mixins, are being imported and summarized inside the [main.scss](./assets/scss/main.scss) file.

Note: Not all seven folders of the SASS 7-1 pattern have yet been setup. This is because folders such as `/themes` are very project specific.

### Adding new files

Before adding any new file, make sure to check out [this guide](https://sass-guidelin.es/#the-7-1-pattern) to declare in which folder the new file belongs – or if you need to create a new folder.

Once the file is placed correctly, an import to that file needs to be set:

- If your file declares variarbles or mixins, import it inside the [main.scss](./assets/scss/main.scss).
- If you declare actual styles, place the import inside the [global.scss](./assets/scss) file.

### Nuxt style-resources

This boilerplate uses [@nuxtjs/style-resources](https://github.com/nuxt-community/style-resources-module). That way we are able to share all SASS tools across the entire project, done by importing them inside the [main.scss](./assets/scss/main.scss) file.

Actual styles that need to be shared by default gloablly are placed inside the [global.scss](./assets/scss) file. Those styles are being exposed through the `css` property inside [nuxt.config.js](./nuxt.config.js)

## VS Code

We recommend using VS Code. [Recommended extensions](./.vscode/extensions.json) can be installed (prompt by VS Code) when opening the project. [Project settings](./.vscode/settings.json) ensure that linting with [`eslint`](./.eslintrc.js) and [`stylelint`](./.stylelintrc.json) works correctly.
