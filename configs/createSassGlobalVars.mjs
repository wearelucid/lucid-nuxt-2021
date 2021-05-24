import { writeFile } from 'fs'
import consola from 'consola'
import 'dotenv/config'

const debugBreakpoints = process.env.DEBUG_BREAKPOINTS === 'true'

let sassVars = `/**
 * ! Don't update this file manually, instead change \`configs/createSassGlobalVars.mjs\`
 */

`

sassVars += `$debug-breakpoints: ${debugBreakpoints};
`

writeFile('./assets/scss/abstracts/_globals.scss', sassVars, (err) => {
  if (err) throw err
  consola.log('🌎 globals.scss saved')
})
