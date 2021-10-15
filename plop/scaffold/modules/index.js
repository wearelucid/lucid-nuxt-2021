const path = require('path')
const changeCase = require('change-case')

module.exports = (plop, config) => {
  plop.setGenerator(`${config.prefix}module`, {
    description: 'Generate Module for Vuex Store',
    prompts: [
      {
        type: 'input',
        message: 'Store Module Name (camelCase)',
        name: 'moduleName',
        validate: (value) => {
          if (!value.length) return 'A module name is required.'
          if (!value.match(/^[a-zA-Z]+$/))
            return 'A module name can only contain letters.'
          if (changeCase.camelCase(value) !== value)
            return 'A module name must be written in camelCase.'
          return true
        },
      },
    ],
    actions: (answers) => {
      const actions = [
        {
          type: 'add',
          path: path.resolve(
            config.basePath,
            'store',
            answers.moduleName + '.js'
          ),
          templateFile: path.resolve(__dirname, 'module.hbs'),
        },
      ]

      return actions
    },
  })
}
