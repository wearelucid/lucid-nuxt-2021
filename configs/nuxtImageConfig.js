import breakpointConfig from './breakpoints.json'

/**
 * * @nuxt/image Config
 * see https://image.nuxtjs.org/api/options
 */
const createNuxtImageConfig = (domains = []) => {
  // Defining breakpoints (screens) based on global breakpoints.json
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
