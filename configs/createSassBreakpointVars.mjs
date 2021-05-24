import { writeFile } from 'fs'
import consola from 'consola'
import breakpoints from './breakpoints.mjs'

let sassVars = `/**
 * ! Don't update this file manually, instead change \`configs/breakpoints.mjs\`
 */

/* stylelint-disable length-zero-no-unit */

`

let sassMap = ''

Object.keys(breakpoints).forEach((bp) => {
  const sassVar = `  '${bp}': ${breakpoints[bp]}px,\n`
  sassMap += sassVar
})

sassVars += `$breakpoints: (\n${sassMap})\n`

const filePath = './assets/scss/abstracts/_breakpoints.scss'

writeFile(filePath, sassVars, (err) => {
  if (err) throw err
  consola.log(`📺 ${filePath} saved`)
})
