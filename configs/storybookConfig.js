import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

import breakpointConfig from './breakpoints.json'
import colorConfig from './colors.json'

/**
 * Create Storybook Viewports
 * -> https://storybook.js.org/docs/react/essentials/viewport
 */
const createStorybookViewportsFromJSON = () => {
  const jsonBreakpoints = breakpointConfig.jsonBreakpoints
  const sbBreakpoints = {}
  for (const bp in jsonBreakpoints) {
    sbBreakpoints[bp] = {
      name: bp,
      styles: {
        width: jsonBreakpoints[bp],
        height: '100%',
      },
    }
  }
  return sbBreakpoints
}

/**
 * Storybook Options (https://storybook.nuxtjs.org/options)
 */
const storybookConfig = {
  port: 4000, // Run Storybook on localhost:4000
  parameters: {
    // https://storybook.js.org/docs/react/essentials/backgrounds
    backgrounds: {
      default: colorConfig.colorBackgroundLight,
      values: [
        { name: 'light', value: colorConfig.colorBackgroundLight },
        { name: 'dark', value: colorConfig.colorBackgroundDark },
      ],
    },
    // https://storybook.js.org/docs/react/essentials/viewport
    viewport: {
      viewports: {
        ...createStorybookViewportsFromJSON(),
        divider: {
          name: '– – – – –',
          width: null,
          height: null,
        },
        ...INITIAL_VIEWPORTS,
      },
    },
  },
}

export default storybookConfig
