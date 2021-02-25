import breakpointConfig from './breakpoints.json'

/**
 * Strip `px` suffix
 */
const parseJsonBreakpoints = (jsonBreakpoints = {}) => {
  const breakpoints = {}
  for (const bp in jsonBreakpoints) {
    breakpoints[bp] = parseInt(jsonBreakpoints[bp], 10)
  }
  return breakpoints
}

/**
 * This is probably optional but added as a safeguard anyway,
 * also because order of `Object.entries()` is not guaranteed.
 * @return {array} Sorted breakpoints array
 */
const sortBreakpointsByPixelValue = (breakpoints = {}) => {
  return Object.entries(breakpoints).sort((a, b) => a[1] - b[1])
}

/**
 * * Offset name and value by one and update largest to insanly high number.
 * * This is caused by sass-mq adding breakpoints at min-width but nuxt-image at max-width.
 * ? Is there another way to achieve this?
 * @return {object} Breakpoints offset by 1
 */
const offsetBreakpointValues = (breakpointsArr = []) => {
  const breakpoints = {}
  for (let index = 0; index < breakpointsArr.length; index++) {
    const key = breakpointsArr[index][0]
    const value = breakpointsArr[index + 1]?.[1]
    if (value) {
      // Remove 1px because of max-width instead of min-width
      breakpoints[key] = value - 1
    } else {
      breakpoints[key] = 999999
    }
  }
  return breakpoints
}

/**
 * * @nuxt/image Config (https://image.nuxtjs.org/api/options)
 * Defining breakpoints (screens) based on global breakpoints.json
 * This will be the base for any srcset when using <nuxt-image>.
 * Can then be used as: :sizes="`small:50vw medium:100vw large:400px`"
 *
 * ! Caveat: Breakpoints are treated differently in nuxt-img than in sass-mq
 * We have to transform them from:
 * { initial: '0px', small: '320px', medium: '768px', large: '1280px' }
 * to:
 * { initial: 320, small: 768, medium: 1280, large: 999999 }
 */
const createNuxtImageConfig = (domains = []) => {
  const { jsonBreakpoints } = breakpointConfig
  const parsedBreakpoints = parseJsonBreakpoints(jsonBreakpoints)
  const sortedBreakpointsArr = sortBreakpointsByPixelValue(parsedBreakpoints)
  const screens = offsetBreakpointValues(sortedBreakpointsArr)

  // console.log({
  //   jsonBreakpoints,
  //   parsedBreakpoints,
  //   sortedBreakpointsArr,
  //   screens,
  // })

  return { domains, screens }
}

export default createNuxtImageConfig
