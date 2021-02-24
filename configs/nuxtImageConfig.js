import breakpointConfig from './breakpoints.json'

/**
 * * @nuxt/image Config
 * see https://image.nuxtjs.org/api/options
 */
const createNuxtImageConfig = (domains = []) => {
  // Defining breakpoints (screens) based on global breakpoints.json
  // This will be the base for any srcset when using <nuxt-image>.
  // Can then be used as: :sizes="`small:50vw medium:100vw large:400px`"
  const imageBreakpoints = {}
  const jsonBreakpoints = breakpointConfig.jsonBreakpoints
  for (const bp in jsonBreakpoints) {
    imageBreakpoints[bp] = parseInt(jsonBreakpoints[bp], 10)
  }

  return {
    domains,
    screens: imageBreakpoints,
  }
}

export default createNuxtImageConfig
