import 'dotenv/config'
import consola from 'consola'
import chalk from 'chalk'

const { BASE_URL, API_URL } = process.env

consola.log(`
   ${chalk.yellow('--------------------------------------------------')}
   ${chalk.yellow.bold('Config Variables')}
   ${chalk.yellow('--------------------------------------------------')}
   ${chalk.yellow('BASE_URL:')} ${chalk.green.bold(BASE_URL)}
   ${chalk.yellow('API_URL:')}  ${chalk.green.bold(API_URL)}
   ${chalk.yellow('--------------------------------------------------')}
`)
