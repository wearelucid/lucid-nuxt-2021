# lucid-nuxt-2021

## Prerequisites
- [Node Version Manager](https://github.com/nvm-sh/nvm)
- .env file (`cp .env.example .env`)

## First Things First
- Delete the [`/_nuxt-content-module-demo`](./_nuxt-content-module-demo/README.md) directory if you don't need it
- Go through [`nuxt.config.js`](./nuxt.config.js)
  - Remove i18n if you don't need it

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