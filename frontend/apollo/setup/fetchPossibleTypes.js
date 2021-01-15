/* eslint-disable no-console */
const fs = require('fs')
const fetch = require('cross-fetch')
require('dotenv').config()

const fileLocationForFetchedTypes = './apollo/setup/possibleTypes.json'

/**
 * Fetch possible types because we get a "WARNING: heuristic fragment matching going on!" otherwise.
 * Mostly following this guide: https://www.apollographql.com/docs/react/data/fragments/#generating-possibletypes-automatically
 */

const apiUrl = process.env.API_URL
if (apiUrl == null) throw new Error('❌ No API_URL found in .env')

fetch(apiUrl, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    variables: {},
    query: `
      {
        __schema {
          types {
            kind
            name
            possibleTypes {
              name
            }
          }
        }
      }
    `,
  }),
})
  .then((result) => result.json())
  .then((result) => {
    // here we're filtering out any type information unrelated to unions or interfaces
    const filteredData = result.data.__schema.types.filter(
      (type) => type.possibleTypes !== null
    )
    result.data.__schema.types = filteredData

    fs.writeFile(
      fileLocationForFetchedTypes,
      JSON.stringify(result.data),
      (err) => {
        if (err) {
          throw new Error('❌ Error writing possibleTypes.json', err)
        } else {
          console.log('✅ Fragment types successfully extracted!')
        }
      }
    )
  })
