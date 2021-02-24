import breakpointConfig from './breakpoints.json'

/**
 * * @nuxt/image Config
 * see https://image.nuxtjs.org/api/options
 */
const createNuxtImageConfig = (domains = []) => {
  // Defining breakpoints (screens) based on global breakpoints.json
  // This will be the base for any srcset when using <nuxt-image>.
  // Can then be used as: :sizes="`small:50vw medium:100vw large:400px`"
  const breakpoints = {}
  const jsonBreakpoints = breakpointConfig.jsonBreakpoints

  for (const bp in jsonBreakpoints) {
    breakpoints[bp] = parseInt(jsonBreakpoints[bp], 10)
  }

  // Optional: Sort by px value
  const sortedScreens = Object.entries(breakpoints).sort((a, b) => a[1] - b[1])

  // Offset name and value by one and update largest to insanly high number
  const screens = {}
  for (let index = 0; index < sortedScreens.length; index++) {
    const key = sortedScreens[index][0]
    const value = sortedScreens[index + 1]?.[1]
    if (value) {
      screens[key] = value
    } else {
      screens[key] = 999999
    }
  }

  return {
    domains,
    screens,
  }
}

export default createNuxtImageConfig
