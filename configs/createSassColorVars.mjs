import { writeFile } from 'fs'
import consola from 'consola'
import colors from './colors.mjs'

let sassVars = `/**
 * ! Don't update this file manually, instead change \`configs/colors.mjs\`
 */

`

Object.keys(colors).forEach((c) => {
  const sassVar = `$color-${c}: ${colors[c]};\n`
  sassVars += sassVar
})

writeFile('./assets/scss/abstracts/_colors.scss', sassVars, (err) => {
  if (err) throw err
  consola.log('🎨 colors.scss saved')
})
