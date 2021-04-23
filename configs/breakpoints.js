import breakpointsJson from './breakpoints.json'

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
 * * We need this because sass-mq adds breakpoints at min-width
 * * but other packages (nuxt-image or nuxt-mq) use max-width.
 * ? Is there another way to achieve this?
 * @return {object} Breakpoints offset by 1
 */
const offsetBreakpointValues = (breakpointsArr = []) => {
  const breakpoints = {}
  for (let index = 0; index < breakpointsArr.length; index++) {
    const key = breakpointsArr[index][0]
    const value = breakpointsArr[index + 1]?.[1]
    if (value) {
      breakpoints[key] = value
    } else {
      breakpoints[key] = 999999
    }
  }
  return breakpoints
}

/**
 * Remove one pixel
 */
const substractOnePixelFromEachBreakpoint = (breakpoints = {}) =>
  Object.keys(breakpoints).reduce((acc, key) => {
    acc[key] = maxWidthBreakpoints[key] - 1
    return acc
  }, {})

const { jsonBreakpoints } = breakpointsJson
const minWidthBreakpoints = parseJsonBreakpoints(jsonBreakpoints)
const sortedBreakpointsArr = sortBreakpointsByPixelValue(minWidthBreakpoints)
const maxWidthBreakpoints = offsetBreakpointValues(sortedBreakpointsArr)
const maxWidthBreakpointsMinusOne = substractOnePixelFromEachBreakpoint(
  maxWidthBreakpoints
)
const nuxtMqBreakpoints = maxWidthBreakpoints
const nuxtImageBreakpoints = maxWidthBreakpointsMinusOne

// console.log({
//   jsonBreakpoints,
//   minWidthBreakpoints,
//   maxWidthBreakpoints,
//   maxWidthBreakpointsMinusOne,
// })

export {
  minWidthBreakpoints as default,
  jsonBreakpoints,
  maxWidthBreakpoints,
  maxWidthBreakpointsMinusOne,
  nuxtMqBreakpoints,
  nuxtImageBreakpoints,
}
